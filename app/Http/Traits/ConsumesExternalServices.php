<?php

namespace App\Http\Traits;

use GuzzleHttp\Client;


trait ConsumesExternalServices {
    /**
     * Send a request to any service
     *
     * @return response
     */

    public function makeRequest(string $method, string $url, $queryParams = [], $formParams = [], $headers = [], $hasFile = false)
    {
        $client = new Client();

        $bodyType = 'form_params';

        if ($hasFile) {
            $bodyType = 'multipart';
            $multipart = [];

            foreach ($formParams as $name => $contents) {
                $multipart[] = [
                    'name' => $name,
                    'contents' => $contents
                ];
            }
        }


        $res = $client->request($method, $url,[
            $bodyType => $hasFile ? $multipart : $formParams,
            'headers' => $headers,
        ]);
        return $res->getBody();
    }
}
