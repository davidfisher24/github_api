<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;


class BaseController extends Controller
{
	/**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    private $request;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function __construct(Request $request) {
        $this->request = $request;
    }

    /**
     * Get query prams from url.
     *
     * @param  array  $permitted
     * @return object params
     */
    public function getQueryParams($permitted = [])
    {
        $queryString = $this->request->getQueryString();

        $parameters = [];
        $explodedQueryString = explode('&', $queryString);
        foreach ($explodedQueryString as $string) {
            $values = explode('=', $string);
            $key = $values[0];
            $val = $values[1];

            if (in_array ($key , $permitted)) {
                $parameters[$key] = $val;
            }

        }
        return $parameters;
    }
}
