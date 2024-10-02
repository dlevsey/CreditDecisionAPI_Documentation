


.. _Authentication:


# Authentication



The Credit Decision API uses API keys for authentication.

- API keys are required for every endpoint.

- API keys are passed in the `Authorization` header as a Bearer token.

```bash

Authorization: Bearer {your_api_key}

```


## Servers


- **Production Server:** `https://api.fintehcbank.com/v1`

- **Sandbox Server:** `https://sandboxapi.fintechbank.com/v1`



- **Endpoint for Access Token:** `https://sandboxapi.transfersolo.com/connect/token` 
- **Base URL:** `https://sandboxapi.transfersolo.com/api/v1/`
- **Endpoint Access Example:** `https://sandboxapi.transfersolo.com/api/v1/Dividend/GetList?customerIssuerId=1127`

  

Quick Start - Programmatically
------------------------------


See below for how authentication should work in different languages.





.. tabs::

   .. tab:: C#

      .. code-block:: csharp

         using System;
         using System.Collections.Generic;
         using System.Net.Http;
         using System.Net.Http.Headers;
         using System.Text.Json;
         using System.Threading.Tasks;

         namespace SoloApiExamples
         {
             public class TokenRetrieval
             {
                 public static async Task<string> GetAuthTokenAsync()
                 {
                     var clientId = Environment.GetEnvironmentVariable("SOLO_CLIENT_ID");
                     var clientSecret = Environment.GetEnvironmentVariable("SOLO_CLIENT_SECRET");
                     var tokenEndpoint = "https://sandboxapi.transfersolo.com/connect/token";

                     using (var client = new HttpClient())
                     {
                         var requestData = new Dictionary<string, string>
                         {
                             { "grant_type", "client_credentials" },
                             { "client_id", clientId },
                             { "client_secret", clientSecret }
                         };

                         var requestContent = new FormUrlEncodedContent(requestData);
                         var response = await client.PostAsync(tokenEndpoint, requestContent);

                         if (response.IsSuccessStatusCode)
                         {
                             var jsonContent = await response.Content.ReadAsStringAsync();
                             var tokenData = JsonSerializer.Deserialize<Dictionary<string, string>>(jsonContent);
                             return tokenData["access_token"];
                         }
                         else
                         {
                             var errorContent = await response.Content.ReadAsStringAsync();
                             throw new ApplicationException($"Failed to retrieve token: {errorContent}");
                         }
                     }
                 }
             }
         }

   .. tab:: React

      .. code-block:: javascript

         import React, { useEffect, useState } from 'react';
         import axios from 'axios';

         const clientId = process.env.SOLO_CLIENT_ID;
         const clientSecret = process.env.SOLO_CLIENT_SECRET;
         const tokenEndpoint = 'https://sandboxapi.transfersolo.com/connect/token';

         const DividendList = () => {
             const [dividends, setDividends] = useState(null);

             // Function to retrieve access token
             const retrieveAccessToken = async () => {
                 const tokenData = {
                     grant_type: 'client_credentials',
                     client_id: clientId,
                     client_secret: clientSecret
                 };

                 try {
                     const response = await axios.post(tokenEndpoint, new URLSearchParams(tokenData), {
                         headers: {
                             'Content-Type': 'application/x-www-form-urlencoded'
                         }
                     });

                     if (response.status === 200) {
                         return response.data.access_token;
                     } else {
                         console.error('Failed to retrieve token');
                         return null;
                     }
                 } catch (error) {
                     console.error('Error retrieving access token:', error);
                     return null;
                 }
             };

   .. tab:: Python

      .. code-block:: python

         import requests
         import os

         # Set up environment variables for security
         os.environ['SOLO_CLIENT_ID'] = 'your_client_id_here'
         os.environ['SOLO_CLIENT_SECRET'] = 'your_client_secret_here'

         # Retrieve credentials from environment variables
         CLIENT_ID = os.getenv('SOLO_CLIENT_ID')
         CLIENT_SECRET = os.getenv('SOLO_CLIENT_SECRET')

         def get_oauth2_token():
             token_url = "https://sandboxapi.transfersolo.com/connect/token"
             data = {
                 "grant_type": "client_credentials",
                 "client_id": CLIENT_ID,
                 "client_secret": CLIENT_SECRET
             }
             
             response = requests.post(token_url, data=data)
             
             # Handle the response
             if response.status_code == 200:
                 print("Token retrieved successfully!")
                 return response.json()['access_token']
             else:
                 print(f"Failed to retrieve token: {response.json()}")
                 return None

         def get_dividend_list(token):
             api_url = "https://sandboxapi.transfersolo.com/api/v1/Dividend/GetList?customerIssuerId=1127"
             headers = {"Authorization": f"Bearer {token}"}
             
             response = requests.get(api_url, headers=headers)
             
             if response.status_code == 200:
                 return response.json()
             else:
                 print(f"Failed to retrieve dividend list: {response.json()}")
                 return None

         token = get_oauth2_token()
         if token:
             dividend_list = get_dividend_list(token)
             print(dividend_list)


   .. tab:: JSON

      .. code-block:: json

         {
           "tokenRetrieval": {
             "description": "Retrieve OAuth2 token.",
             "steps": [
               {
                 "step": "Set up environment variables.",
                 "details": "SOLO_CLIENT_ID and SOLO_CLIENT_SECRET"
               },
               {
                 "step": "Retrieve credentials.",
                 "details": {
                   "client_id": "{{Make sure to use appropriate reference to environment variable here}}",
                   "client_secret": "{{Make sure to use appropriate reference to environment variable here}}"
                 }
               },
               {
                 "step": "Define the OAuth2 token endpoint.",
                 "token_endpoint": "https://sandboxapi.transfersolo.com/connect/token"
               },
               {
                 "step": "Prepare the token request data.",
                 "request_data": {
                   "grant_type": "client_credentials",
                   "client_id": "{{client_id}}",
                   "client_secret": "{{client_secret}}"
                 }
               },
               {
                 "step": "Make a POST request to the token endpoint.",
                 "method": "POST",
                 "url": "https://sandboxapi.transfersolo.com/connect/token",
                 "body": {
                   "grant_type": "client_credentials",
                   "client_id": "{{client_id}}",
                   "client_secret": "{{client_secret}}"
                 }
               }
             ]
           },
           "exampleRequestToDividendGetListWithToken": {
             "description": "Example request to the Dividend and GetList endpoint using the retrieved token.",
             "method": "GET",
             "url": "{{baseurl}}/api/v1/Dividend/GetList?customerIssuerId=1127",
             "headers": {
               "Authorization": "Bearer <YOUR TOKEN>"
             }
           },
           "note": "Remember to replace `<YOUR TOKEN>` with the actual token received from the token endpoint."
         }

   .. tab:: Java

      .. code-block:: java

         import java.io.BufferedReader;
         import java.io.DataOutputStream;
         import java.io.InputStreamReader;
         import java.net.HttpURLConnection;
         import java.net.URL;
         import java.util.stream.Collectors;

         public class SoloAPIClient {

             private static String getToken() {
                 try {
                     String clientId = System.getenv("SOLO_CLIENT_ID");
                     String clientSecret = System.getenv("SOLO_CLIENT_SECRET");
                     URL url = new URL("https://sandboxapi.transfersolo.com/connect/token");
                     HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                     conn.setRequestMethod("POST");
                     conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                     conn.setDoOutput(true);
                     String urlParameters = "grant_type=client_credentials&client_id=" +
                             clientId + "&client_secret=" + clientSecret;
                     DataOutputStream wr = new DataOutputStream(conn.getOutputStream());
                     wr.writeBytes(urlParameters);
                     wr.flush();
                     wr.close();

                     int responseCode = conn.getResponseCode();
                     if (responseCode == HttpURLConnection.HTTP_OK) {
                         String response = new BufferedReader(new InputStreamReader(conn.getInputStream()))
                                 .lines().collect(Collectors.joining("\n"));
                         // Assuming the token is directly returned for simplicity; parse the response as needed.
                         return response;
                     } else {
                         System.out.println("Failed to retrieve token: " + responseCode);
                         return null;
                     }
                 } catch (Exception e) {
                     System.out.println("Exception occurred: " + e.getMessage());
                     return null;
                 }
             }

             private static void getList(String token) {
                 try {
                     URL url = new URL("https://sandboxapi.transfersolo.com/api/v1/Dividend/GetList?customerIssuerId=1127");
                     HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                     conn.setRequestMethod("GET");
                     conn.setRequestProperty("Authorization", "Bearer " + token);

                     int responseCode = conn.getResponseCode();
                     System.out.println("GET List Response Code : " + responseCode);
                     if (responseCode == HttpURLConnection.HTTP_OK) {
                         String responseStr = new BufferedReader(new InputStreamReader(conn.getInputStream()))
                                 .lines().collect(Collectors.joining("\n"));
                         System.out.println(responseStr);
                     } else {
                         System.out.println("GET request not worked");
                     }

                 } catch (Exception e) {
                     System.out.println("Exception occurred while making GET list request: " + e.getMessage());
                 }
             }

             public static void main(String[] args) {
                 String token = getToken();
                 if (token != null) {
                     getList(token);
                 }
             }
         }


   .. tab:: Go

      .. code-block:: go

         package main

         import (
             "bytes"
             "encoding/json"
             "fmt"
             "io/ioutil"
             "net/http"
             "os"
         )

         type OAuth2TokenResponse struct {
             AccessToken string `json:"access_token"`
         }

         func main() {
             clientID := os.Getenv("SOLO_CLIENT_ID")
             clientSecret := os.Getenv("SOLO_CLIENT_SECRET")
             tokenEndpoint := "https://sandboxapi.transfersolo.com/connect/token"

             data := []byte(`grant_type=client_credentials&client_id=` + clientID + `&client_secret=` + clientSecret)
             req, err := http.NewRequest("POST", tokenEndpoint, bytes.NewBuffer(data))
             if err != nil {
                 fmt.Println("Error creating request:", err)
                 return
             }

             req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

             client := &http.Client{}
             resp, err := client.Do(req)
             if err != nil {
                 fmt.Println("Error sending request:", err)
                 return
             }
             defer resp.Body.Close()

             if resp.StatusCode == http.StatusOK {
                 var tokenResponse OAuth2TokenResponse
                 body, err := ioutil.ReadAll(resp.Body)
                 if err != nil {
                     fmt.Println("Error reading response body:", err)
                     return
                 }

                 err = json.Unmarshal(body, &tokenResponse)
                 if err != nil {
                     fmt.Println("Error unmarshalling response:", err)
                     return
                 }

                 fmt.Println("Access Token:", tokenResponse.AccessToken)
             } else {
                 fmt.Println("Request failed with status:", resp.Status)
             }
         }


.. seealso::

   If you encounter any issues, please :ref:`let us know <bug-reporting>`.


Quick Start - Postman
---------------------

You can also use the following steps to quickly get started with the API in Postman:

1. Create a new environment.
2. Add the following variables to the environment:

   - `baseurl`: The base URL of the API. 
   - `clientId`: Your client ID.
   - `clientSecret`: Your client secret.
   - `access_token`: Your access token.

3. Change the values for the variables to be the following:

   - `baseurl`: `https://sandboxapi.transfersolo.com`.
   - `clientId`: Your client ID.
   - `clientSecret`: Your client secret.
   - `access_token`: Your access token.


   .. note:: You can obtain your access token by following the steps in the `Requesting an Access Token in Postman`_ section.

4. Click "Save."

5. Change environment to the environment you just created.
6. Create New Collection. 
7. Set up an Access Token in Postman.

.. note:: You can obtain your access token by following the steps in either the `Requesting an Access Token in Postman - Bearer Token`_ section, or the `Requesting an Access Token in Postman - OAuth2.0 Token`_ section.

8. Click "Save."

.. note:: You should now be authorized.



Requesting an Access Token in Postman 
--------------------------------------



.. _Requesting an Access Token in Postman:

.. _Requesting an Access Token in Postman - Bearer Token:

Requesting an Access Token in Postman - Bearer Token
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Create a New Request.
2. Set the Request Method to POST.
3. Set the Request URL to {{baseurl}}/connect/token.
4. Click on the "Body" tab.
5. Change the "Body" type to "x-www-form-urlencoded."
6. Add the following key/value pairs to the body:

   - `grant_type`: client_credentials.
   - `client_id`: {{clientId}}.
   - `client_secret`: {{clientSecret}}.
   - `scope`: access_token.


4. Click on the "Authorization" tab.
5. Select "Bearer Token" if you already have a token. 
6. Select "Save."
7. Select "Send."

.. note:: You should now have an access token. 


.. _Requesting an Access Token in Postman - OAuth2.0 Token:

Requesting an Access Token in Postman - OAuth 2.0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Create a New Request.
2. Set the Request Method to POST.
3. Set the Request URL to {{base\_url}}/connect/token.
4. Click on the "Authorization" tab.
5. Select "OAuth 2.0" if you already have a token. 
6. Check the following:

   - `Add authorization data to:` Request Headers.
   - `Token:`\{\{access_token\}\}.
   - `Header Prefix:` Bearer.
   - `Grant Type:` Client Credentials.
   - `Access Token URL:` \{\{baseurl\}\}/connect/token.
   - `Client ID:` \{\{clientId\}\}.
   - `Client Secret:` \{\{clientsecret\}\}.
   - `Scope:` access_token.
   - `Client Authentication:` Send as Basic Auth header.

7. Click "Get New Access Token."
8. Select "Proceed."
9. Change Token Name (if desired).
10. Select "Use Token."
11. Select "Send."

.. note:: You should now have an access token. 


Example Request With Access Token
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once you have an `access_token`, you can use it to make authenticated requests to the API. 

Include it in the `Authorization` header as a Bearer token. 

1. Create a New Request.

2. Set Request Url to the endpoint you want to call.

   Example:

.. code-block:: bash

   GET {{baseurl}}/api/v1/Shareholder/Details




3. Set Request Method to correct method. 

4. Select the "Authorization" tab.

  - `Type:` Bearer Token.

  - `Token:` {{access_token}}.

5. Select the "Headers" tab, and add the following header:

   - `Content-Type:` application/json.

6. Select "Params" tab, and add any required parameters.

   Example:

.. code-block:: bash
      
   CustomerShareholderId: 102322
      

6. Select "Save."
7. Select "Send."

.. note:: You can also copy the request url below and paste it into the request url field in Postman.

Request URL:

.. code-block:: bash 
   
   {{baseurl}}/api/v1/Shareholder/Details?CustomerShareholderId=102322





.. _solo_header_requirements:


SOLO Header Requirements
------------------------

When making API requests, SOLO may require you to include additional headers:

- `Authorization`: The access token. Required for all requests. 

.. note:: Typically, this is automatically populated by the API client.

- `Content-Type`: application/json. Required for POST and PUT requests.


