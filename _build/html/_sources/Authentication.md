


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




## Authentication Examples


See below for how authentication should work in different languages.



```{eval-rst}

.. tabs::

   .. tab:: C#

      .. code-block:: csharp

           using System;
           using System.Net.Http;
           using System.Threading.Tasks;
      
           class Program
           {
               private static async Task Main()
               {
                   var apiKey = "your_api_key_here";
                   var client = new HttpClient();
                   client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
                   client.DefaultRequestHeaders.Add("Content-Type", "application/json");
      
                   var response = await client.GetAsync("https://api.fintechbank.com/v1/credit-decision");
                   var content = await response.Content.ReadAsStringAsync();
                   Console.WriteLine(content);
               }
           }

   .. tab:: Python

      .. code-block:: python
   
         import requests
      
         api_key = 'your_api_key_here'
         headers = {
             'Authorization': f'Bearer {api_key}',
               'Content-Type': 'application/json'
         }
      
         response = requests.get('https://api.fintechbank.com/v1/credit-decision', headers=headers)
         print(response.json())
        
        
   .. tab:: JavaScript
   
        .. code-block:: javascript

           const fetch = require('node-fetch');
      
           const apiKey = 'your_api_key_here';
      
           fetch('https://api.fintechbank.com/v1/credit-decision', {
               method: 'GET',
               headers: {
                   'Authorization': `Bearer ${apiKey}`,
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Error:', error));
```

