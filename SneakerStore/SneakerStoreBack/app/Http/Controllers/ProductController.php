<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;
use App\ProductImage;

class ProductController extends Controller
{
    function GetAllProduct(){
        $productList = DB::select(
            'select p.id, p.name, p.unit_price, pi.image
                from products p
                join product_images pi on p.id = pi.product_id
                where pi.default = 1 '); // raw SQL Query
        
        // $pList1 = Product::all(); // eloquent ORM

        // $pList2 = DB::table('products as p')
        //             ->join('product_images as pi', 'pi.product_id', '=', 'p.id')
        //             ->where('pi.default','=', true)
        //             ->select('p.name', 'p.unit_price', 'pi.image')
        //             ->get(); // Query Builder

        // $obj = new Product;
        // $obj->name = "New Product";
        // $obj->save();

        return response()->json($productList, 200);
    }

    function GetProductById(Request $req){
        
        DB::beginTransaction();
        try{

            $this->validate($req, [
                'product_id' => 'required'
            ]);

            $productId = $req->input('product_id');
            
            // $productList = DB::select(
            //     'select p.id, p.name, p.unit_price, p.description, pi.image,
            //         pi.default, pd.size, pd.stock
            //         from products p
            //         left join product_images pi on p.id = pi.product_id
            //         left join product_details pd on p.id = pd.product_id
            //         where p.id = ' . $productId . ' ');

            $product = DB::selectOne('select id, name, unit_price, 
                description from products 
                where id = ' . $productId . ' ');

            if (empty($product)) {
                return response()->json(['message' => 'Product Not Found'], 404);
            }
            
            $productDetails = DB::select('select id product_details_id,
                size, stock from product_details 
                where product_id = ' . $productId . ' ');

            $productImages = DB::select('select *
                from product_images 
                where product_id = ' . $productId . ' ');

            $product->product_details = $productDetails;
            $product->product_images = $productImages;

            DB::commit();

            return response()->json($product, 200); 
        }
        catch(\Exception $e){
            DB::rollback();
            return response()->json(['message' => 'Failed to create user, exception:' + $e], 500);
        }
    }

    function SaveProductImage(Request $req){

        DB::beginTransaction();
        try{

            $this->validate($req, [
                'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
                'product_id' => 'required'
            ]);

            $productId = $req->input('product_id');
            $image = $req->file('image');

            $file_name = time() . '.' . $image->getClientOriginalExtension();
            $file_path = '/img/product/' . $productId;
            $file_destination = public_path($file_path);

            $productImage = new ProductImage;
            $productImage->product_id = $productId;
            $productImage->image = $file_path . "/" . $file_name;
            $productImage->default = false;
            $productImage->save();
            
            DB::commit();

            $image->move($file_destination, $file_name);
        }
        catch(\Exception $e){
            DB::rollback();
        }
    }

}
