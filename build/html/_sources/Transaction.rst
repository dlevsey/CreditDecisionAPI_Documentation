Transaction
=============

Resource and endpoints for transaction related operations.




Endpoints:
-----------

- :httpmethod-small-post:`POST`  :ref:`Transaction/GenerateTransactionDetails  <generate-transaction-details>`

..

..

- :httpmethod-small-post:`POST` :ref:`Transaction/CreateNewIssuance <create-new-issuance>`

..

..


- :httpmethod-small-get:`GET` :ref:`Transaction/GetTAStatusTransactions <GetTAStatusTransactions>`

..

..

- :httpmethod-small-post:`POST` :ref:`Transaction/GenerateTransactions <generate-transactions>`

..

..


.. _generate-transaction-details:

:httpmethod:`POST` :medium-titles:`Transaction/GenerateTransactionDetails`
----------------------------------------------------------------------------

Description:
~~~~~~~~~~~~~

* Allows you to generate transaction details. 
* Only completed transactions can be generated. 
* Pending transaction will not be generated.


Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/controlTransactionId_required.rst




Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Transaction/GenerateTransactionDetails' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data '{
        "controlTransactionId": 2121
    }'

Example Response:
~~~~~~~~~~~~~~~~~~
.. code-block:: json

    {

    "downloadUrl": "{{baseurl}}/api/v1/Transaction/GenerateTransactionDetails/CfDJ8G2a_F-j-rtGiUBjbT5isV1Ipqf4dR3GqLU2YxSgt48du3Ou-WqbxdXRIMvStv89lntvqfGdfX6LyQ2ZsxZ0WwFMw3wS_vPk4-yAYFAGb0J9Db4MTUzzBgXW3rWh-zWHKn0IEFZFbB1y9YZNc7Pqx60Ja_ATwXDQd4iFdYokEiPC/Diluted-Percentage.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV3Hu-jA7zMIrWfSA_7r-cX3Xf7T7H79utc9yZKwgwkaC3Ulo2Fs9kpX0MeahnEHr9HWBUmT5q9jCGVRizTQwdMrjFsCTm6RELhzi72RTLNi_hxxrJKwzMUFG80smDDvI5Y"
    }

.. _create-new-issuance:

:httpmethod:`POST` Transaction/CreateNewIssuance
-------------------------------------------------

Description:
~~~~~~~~~~~~~~

Allows user to create a new issuance.


Request Body:
~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions_2effectiveDate_required.rst

.. include:: definitions_2/processDate_required.rst

.. include:: definitions_2/chargeAmount_required.rst

.. include:: definitions_2/certificateType_required.rst

.. include:: definitions/SecurityType_optional.rst

.. include:: definitions/securityType_securitySeriesCode_optional.rst

.. include:: definitions/expanded_attributes_securityType_securityTypeCode_optional.rst



.. include:: definitions_2/comments_required.rst

.. include:: definitions/createdByEmail_required.rst

.. include:: definitions/createdByFirstName_required.rst

.. include:: definitions/createdByLastName_required.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions_2/restrictionCode_required.rst

.. include:: definitions_2/taxLots_optional.rst

.. include:: definitions_2/taxLots.date_required.rst

.. include:: definitions_2/taxLots.shares_optional.rst


.. include:: definitions_2/taxLot.pricePerShare_optional.rst

.. include:: definitions_2/taxLot.totalCostBasis_optional.rst




Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Transaction/CreateNewIssuance' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data-raw '{
            "CustomerIssuerId":9999,    
            "EffectiveDate":"2023-08-07",   
            "ProcessDate":"2023-08-09", 
            "ChargeAmount":0,    
            "CertificateType":"Book",    
            "SecurityType":{
                "SecurityTypeCode":"C",        
                "SecuritySeriesCode":""        
            },
        
            "Comments":"",
            "CreatedByEmail":"john@transferonline.com",
            "CreatedByFirstName":"John",
            "CreatedByLastName":"Vo",
            "Certificates":[
                {
                    "RestrictionCode":"N",
                    "Shares":1200,
                    "Shareholder":{
                        "CustomerShareholderNumber":"102323",
                        "sortName":"Account New",
                        "Name":"New Account API 1001",
                        "Name2":"",                
                        "Name3":"",                
                    "accountType":"Individual",                
                        "primaryTaxId":"543-35-3566",
                        "primaryTaxIdType":"SSN",                
                        "primaryPayeeName":"James Doe",
                        "secondaryTaxId":"545-73-2333",
                        "secondaryTaxIdType":"SSN",                
                        "secondaryPayeeName":"Tammy Doe",
                        "PrimaryAddress":{
                            "Address1":"Demo Street 1001",
                            "Address2":"Suite 200",
                            "City":"Portland",
                            "State":"OR",
                            "PostalCode":"97214",
                            "Country2Code":"US",                    
                            "Email":"john@transferonline.com",
                            "Phone":"503-333-3333",
                            "SecondaryPhone":""
                        },                
                        "MailingAddress":{
                            "Address1":"Demo Street 1001",
                            "Address2":"Suite 200",
                            "City":"Portland",
                            "State":"OR",
                            "PostalCode":"97214",
                            "Country2Code":"US",                   
                            "Email":"john@transferonline.com",
                            "Phone":"503-333-3333",
                            "SecondaryPhone":""
                        }               
                    },
                    "TaxLots":[
                        {
                            "Date":"2023-08-09",                    
                            "Shares":400,
                            "TotalCostBasis":4000,
                            "PricePerShare":10
                        },
                        {
                            "Date":"2023-08-09",                   
                            "Shares":800,
                            "TotalCostBasis":8000,
                            "PricePerShare":10
                        }
                    ]
                
                },
                {
                    "RestrictionCode":"R",           
                    "Shares":450,            
                    "Shareholder":{
                        "customerShareholderId":"1023246",
                        "sortName":"Account New",                
                        "Name":"New Account API 2002",                
                        "Name2":"Joint Name",               
                        "Name3":"",                
                        "accountType":"Individual",                
                        "primaryTaxId":"739-35-3511",
                        "primaryTaxIdType":"SSN",              
                        "primaryPayeeName":"Donathan Doe",
                        "secondaryTaxId":"",
                        "secondaryTaxIdType":"NONE",              
                        "secondaryPayeeName":"",
                        "PrimaryAddress":{
                            "Address1":"Demo Street 2001",
                            "Address2":"Suite 300",
                            "City":"Portland",
                            "State":"OR",
                            "PostalCode":"97214",
                            "Country2Code":"US",                   
                            "Email":"john@transferonline.com",
                            "Phone":"503-222-2222",
                            "SecondaryPhone":""
                        }                
                    }
                }
            ]
        }'

Example Response:
~~~~~~~~~~~~~~~~~~
.. code-block:: json

    {
        "controlTransactionId": 20886,
        "customerTransactionId": null,
        "displayTransactionId": 20886
    }   


.. _GetTAStatusTransactions:

:httpmethod:`GET` Transaction/GetTAStatusTransactions 
-------------------------------------------------------

Description:
~~~~~~~~~~~~~~

Allows you to get detailed information about TA Status Transactions.


Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/filterTransactionType_required.rst

.. include:: definitions/transactionStatus_required.rst

.. include:: definitions/orderBy_required.rst

.. include:: definitions/sortBy_required.rst

.. include:: definitions/start_required.rst

.. include:: definitions/numberOfRows_required.rst

Example Request:
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl --silent --location '{{baseurl}}/api/v1/Transaction/GetTAStatusTransactions?CustomerIssuerId=9999&FilterTransactionType&Start=1&Status=All&Start=0&NumberOfRows=2&SortBy=completeddate&OrderBy=Ascending' \
        --header 'Authorization: Bearer <YOUR TOKEN>'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
        "totalRecords": 32,
        "transactions": [
            {
                "transactionId": 1495588,
                "controlTransactionId": 13682,
                "type": "New Issuance",
                "receivedDate": "4/27/2020",
                "completedDate": "",
                "effectiveDate": "4/27/2020",
                "transferFrom": "",
                "issuedTo": "",
                "status": "Pending"
            },
            {
                "transactionId": 1495593,
                "controlTransactionId": 14686,
                "type": "New Issuance",
                "receivedDate": "6/4/2020",
                "completedDate": "6/4/2020",
                "effectiveDate": "6/4/2020",
                "transferFrom": "",
                "issuedTo": "Wayne Demo & Emily Demo JT TEN (200 shares)",
                "status": "Completed"
            }
        ]
    }


.. _generate-transactions:

:httpmethod:`POST` Transaction/GenerateTransactions
---------------------------------------------------------


Description:
~~~~~~~~~~~~~~

Allows you to generate transactions.


Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/filterDateBy_required.rst

.. include:: definitions/startDate_required.rst

.. include:: definitions/endDate_required.rst

.. include:: definitions/transactionTypeCode_required.rst

.. include:: definitions/isPDF_required.rst


Example Request:
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Transaction/GenerateTransactions' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data '{
        "customerIssuerId": "9999",
        "filterDateBy": "EffectiveDate",
        "startDate": "2020-07-01",
        "endDate": "2020-07-01",
        "transactionTypeCode": "",
        "isPDF": true
        }'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
    "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV0r5B9N26nYeS0oLBfQr6SGXCBI7QfYmxow2rLNGkkF2d6sJTAJ3VDwJvoEsIkuATo0SGDxYfQwRuf8y27DsDNcXprMUr5b_GVKFZKtDRYvsfgoUbrK7tHvHb9z-0ZfR-TIohcNCtiBJhYwtnBDNeld/transactions.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV3xovmq_IewIGWxZBBXzvUTkRhWMb1htMjDslWJznRFV3zS90kRVb4vnbTS3uZ7znKVI2dG6AnCoLqFxEbi60j7irw7ivfOx_QqKavtId_KRjE44k0jepjpVvArFa23Nzg"
    }