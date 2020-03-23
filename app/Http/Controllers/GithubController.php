<?php

namespace App\Http\Controllers;

use Validator;
use App\Http\Traits\ConsumesExternalServices;
use App\Http\Controllers\BaseController;

class GithubController extends BaseController 
{
    use ConsumesExternalServices;

    private $params;
    private $page_size;
    private $page;
    private $requestUrl;

    /**
     * Github api
     * 
     * @return mixed
     */
    public function index() {

        $this->params = $this->getQueryParams($permitted = ['query', 'page', 'per_page', 'sort', 'order']);

        $this->page_size = array_key_exists('per_page', $this->params) ? $this->params['per_page'] : 25;

        $this->page = array_key_exists('page', $this->params) ? $this->params['page'] : 1;

        $this->getRequestUrl($this->params);

        $data = $this->getApiData();
        
        $response = $this->getResponse(json_decode($data));

        return response()->json($response, 200);
    }

    public function getApiData()
    {
        return $this->makeRequest('GET', $this->getCurrentUrl());
    }

    private function getBaseUrl()
    {
        return 'https://api.github.com';
    }

    private function getRequestUrl($params = [])
    {
        $url = $this->getBaseUrl() . '/search/repositories?';
        if (array_key_exists('query', $params)) $url = $url . "q=$params[query]&";
        if (array_key_exists('sort', $params)) $url = $url . "sort=$params[sort]&";
        if (array_key_exists('order', $params)) $url = $url . "order=$params[order]&";
        $this->requestUrl = $url;   
    }

    private function getResponse($data)
    {
        return (object)[
            "total" => $data->total_count,
            "page_size" => $this->page_size,
            "page" => $this->page,
            "url" => $this->getCurrentUrl(),
            "previous" => $this->previousPageUrl(),
            "next" => $this->nextPageUrl($data->total_count),
            "items" => array_map(function ($i) { 
                return (object)[
                    "full_name" => $i->full_name,
                    "user" => $i->owner->login,
                    "repository" => $i->name,
                    "url" => $i->html_url,
                    "description" => $i->description,
                ]; 
            }, $data->items)
        ];
    }

    private function getCurrentUrl()
    {
        return $this->requestUrl . "page=" . ((int)$this->page - 1) . "&per_page=" . $this->page_size;
    }

    private function previousPageUrl()
    {
        if ($this->page === 1) return null;
        return $this->requestUrl . "page=" . ((int)$this->page - 1) . "&per_page=" . $this->page_size;
    }

    private function nextPageUrl(int $total)
    {
        if ($this->page >= floor($total / 25)) return null;
        return $this->requestUrl . "page=" . ((int)$this->page + 1) . "&per_page=" . $this->page_size;
    }
    
}
