<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;

class ProductController extends Controller
{
    function GetAllProduct()
    {
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
}
