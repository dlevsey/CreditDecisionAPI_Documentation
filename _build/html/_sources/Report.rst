Report
=======

Resource used to generate various types of reports.


Endpoints:
-----------



- :httpmethod-small-get:`GET` :ref:`Report/GetOwnershipPercentage <get-ownership-percentage>`

..

..


- :httpmethod-small-get:`GET` :ref:`Report/GetDilutedPercentage <get-diluted-percentage>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateDilutedPercentage <post-generate-diluted-percentage>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateShareholderList <post-generate-shareholder-list>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateHoldingsStatement <post-generate-holdings-statement>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateDRSStatement <post-generate-drs-statement>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateRejectionList <post-generate-rejection-list>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateIssuerContacts <post-generate-issuer-contacts>`

..

..

- :httpmethod-small-post:`POST` :ref:`Report/GenerateMailingLabels <post-generate-mailing-labels>`

..

..

- :httpmethod-small-get:`GET` :ref:`Report/DownloadReport/{fileCode}/{fileName}/{accessCode} <get-download-report>`

..

..




.. _get-ownership-percentage:

:httpmethod:`GET` Report/GetOwnershipPercentage
-----------------------------------------------

Description:
~~~~~~~~~~~~~

Allows you retrieve ownership details.


Query Parameters:
~~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst


.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/cutoff_required.rst



.. include:: definitions/sortBy_optional.rst


.. include:: definitions/orderBy_optional.rst

.. include:: filterSecurityType_optional.rst



Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash
    
    curl --silent --location --request GET '{{baseurl}}/api/v1/Report/GetOwnershipPercentage?customerIssuerId=1128&cutoff=2023-07-12&filterSecurityType=null&filterSecurityType.securityTypeCode=null&filterSecurityType.securitySeriesCode=null&sortBy=Name&orderBy=Ascending' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR-TOKEN>'\
    --data '{
        "CustomerIssuerId":1128,
        "Cutoff":"2023-07-12",
        "FilterSecurityType":{
            "SecurityTypeCode":"",
            "SecuritySeriesCode":""
        },
        "SortBy":"Name",
        "OrderBy":"Ascending"
    }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    {
        "accounts": [
            {
                "systemShareholderId": 2750,
                "customerShareholderId": "2750",
                "displayShareholderId": "2750",
                "sortName": "Doe Debbie",
                "name": "A/C name:Cinda International Securities Ltd for Client's A/C Titan Asset Management (CHINA) Ltd Name 2 Name 3",
                "securities": [
                    {
                        "securityType": "Common",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 4,
                        "totalSharesFormat": "4",
                        "percentage": 0.11389521640091116,
                        "percentageFormat": "0.1139%"
                    }
                ]
            },
            {
                "systemShareholderId": 6097,
                "customerShareholderId": "6097",
                "displayShareholderId": "6097",
                "sortName": "Alekszej Lugovcov",
                "name": "Alekszej Lugovcov",
                "securities": [
                    {
                        "securityType": "Bond",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 100,
                        "totalSharesFormat": "100",
                        "percentage": 0.46511627906976744,
                        "percentageFormat": "0.4651%"
                    }
                ]
            },
            {
                "systemShareholderId": 2822,
                "customerShareholderId": "2822",
                "displayShareholderId": "2822",
                "sortName": "Grater Allie",
                "name": "Allie Grater",
                "securities": [
                    {
                        "securityType": "Common",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 40,
                        "totalSharesFormat": "40",
                        "percentage": 1.1389521640091116,
                        "percentageFormat": "1.139%"
                    }
                ]
            },
            {
                "systemShareholderId": 2829,
                "customerShareholderId": "2829",
                "displayShareholderId": "2829",
                "sortName": "Grater Allie",
                "name": "Allie Grater",
                "securities": [
                    {
                        "securityType": "Bond",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 400,
                        "totalSharesFormat": "400",
                        "percentage": 1.8604651162790697,
                        "percentageFormat": "1.8605%"
                    }
                ]
            },
            {
                "systemShareholderId": 2824,
                "customerShareholderId": "2824",
                "displayShareholderId": "2824",
                "sortName": "Bacon Chris P. ",
                "name": "Chris P. Bacon Emily Demo JT TEN",
                "securities": [
                    {
                        "securityType": "Common",
                        "numberOfCertificates": 2,
                        "numberOfCertificatesFormat": "2",
                        "totalShares": 3242,
                        "totalSharesFormat": "3,242",
                        "percentage": 92.3120728929385,
                        "percentageFormat": "92.3121%"
                    }
                ]
            },
            {
                "systemShareholderId": 2820,
                "customerShareholderId": "2820",
                "displayShareholderId": "2820",
                "sortName": "Nutt Hazel",
                "name": "Hazel Nutt",
                "securities": [
                    {
                        "securityType": "Common",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 200,
                        "totalSharesFormat": "200",
                        "percentage": 5.694760820045558,
                        "percentageFormat": "5.6948%"
                    }
                ]
            },
            {
                "systemShareholderId": 2826,
                "customerShareholderId": "2826",
                "displayShareholderId": "2826",
                "sortName": "Yew Olive",
                "name": "Olive Yew",
                "securities": [
                    {
                        "securityType": "Warrant",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 2,
                        "totalSharesFormat": "2",
                        "percentage": 25,
                        "percentageFormat": "25%"
                    }
                ]
            },
            {
                "systemShareholderId": 11981,
                "customerShareholderId": "111144",
                "displayShareholderId": "111144",
                "sortName": "Housni Omario",
                "name": "Omario  Housni",
                "securities": [
                    {
                        "securityType": "Bond",
                        "numberOfCertificates": 2,
                        "numberOfCertificatesFormat": "2",
                        "totalShares": 21000,
                        "totalSharesFormat": "21,000",
                        "percentage": 97.67441860465115,
                        "percentageFormat": "97.6744%"
                    },
                    {
                        "securityType": "Common",
                        "numberOfCertificates": 2,
                        "numberOfCertificatesFormat": "2",
                        "totalShares": 9,
                        "totalSharesFormat": "9",
                        "percentage": 0.25626423690205014,
                        "percentageFormat": "0.2563%"
                    },
                    {
                        "securityType": "Preferred",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 250,
                        "totalSharesFormat": "250",
                        "percentage": 100,
                        "percentageFormat": "100%"
                    },
                    {
                        "securityType": "Warrant",
                        "numberOfCertificates": 1,
                        "numberOfCertificatesFormat": "1",
                        "totalShares": 4,
                        "totalSharesFormat": "4",
                        "percentage": 50,
                        "percentageFormat": "50%"
                    }
                ]
            }
        ],
        "balances": [
            {
                "securityType": "Common",
                "numOfShareholder": 7,
                "numOfShareholderFormat": "7",
                "totalOutstandingShares": 3512,
                "totalOutstandingSharesFormat": "3,512",
                "authorizedShares": 999999999999999,
                "authorizedSharesFormat": "Unlimited",
                "isUnlimited": true
            },
            {
                "securityType": "Warrant",
                "numOfShareholder": 3,
                "numOfShareholderFormat": "3",
                "totalOutstandingShares": 8,
                "totalOutstandingSharesFormat": "8",
                "authorizedShares": 2000000,
                "authorizedSharesFormat": "2,000,000",
                "isUnlimited": false
            },
            {
                "securityType": "Preferred",
                "numOfShareholder": 1,
                "numOfShareholderFormat": "1",
                "totalOutstandingShares": 250,
                "totalOutstandingSharesFormat": "250",
                "authorizedShares": 3000000,
                "authorizedSharesFormat": "3,000,000",
                "isUnlimited": false
            },
            {
                "securityType": "Bond",
                "numOfShareholder": 3,
                "numOfShareholderFormat": "3",
                "totalOutstandingShares": 21500,
                "totalOutstandingSharesFormat": "21,500",
                "authorizedShares": 2500000,
                "authorizedSharesFormat": "2,500,000",
                "isUnlimited": false
            }
        ]   
    }




.. _get-diluted-percentage:

:httpmethod:`GET` Report/GetDilutedPercentage
-------------------------------------------------

Description:
~~~~~~~~~~~~~~

Retrieves the ownership percentage for a given issuer.

Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/cutoff_required.rst

.. include:: definitions/isPDF_required.rst


Example Request:
~~~~~~~~~~~~~~~~
.. code-block:: bash

   curl --silent --location '{{baseurl}}/api/v1/Report/GetDilutedPercentage?customerIssuerId=1128&cutoff=2023-07-12' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR-TOKEN>'\



:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: bash

    {
        "securites": [
            {
                "security": "Common",
                "totalShares": 3516,
                "totalSharesFormat": "3,516",
                "shareholders": [
                    {
                        "systemShareholderId": 2824,
                        "customerShareholderId": "2824",
                        "displayShareholderId": "2824",
                        "name": "Chris P. Bacon Emily Demo JT TEN",
                        "isReserved": false,
                        "shares": 3242,
                        "sharesFormat": "3,242"
                    },
                    {
                        "systemShareholderId": 2820,
                        "customerShareholderId": "2820",
                        "displayShareholderId": "2820",
                        "name": "Hazel Nutt",
                        "isReserved": false,
                        "shares": 200,
                        "sharesFormat": "200"
                    },
                    {
                        "systemShareholderId": 2822,
                        "customerShareholderId": "2822",
                        "displayShareholderId": "2822",
                        "name": "Allie Grater",
                        "isReserved": false,
                        "shares": 40,
                        "sharesFormat": "40"
                    },
                    {
                        "systemShareholderId": 2751,
                        "customerShareholderId": "A-2751",
                        "displayShareholderId": "A-2751",
                        "name": "Dean Doe",
                        "isReserved": false,
                        "shares": 17,
                        "sharesFormat": "17"
                    },
                    {
                        "systemShareholderId": 11981,
                        "customerShareholderId": "111144",
                        "displayShareholderId": "111144",
                        "name": "Omario  Housni",
                        "isReserved": false,
                        "shares": 9,
                        "sharesFormat": "9"
                    },
                    {
                        "systemShareholderId": 2750,
                        "customerShareholderId": "2750",
                        "displayShareholderId": "2750",
                        "name": "A/C name:Cinda International Securities Ltd for Client's A/C Titan Asset Management (CHINA) Ltd Name 2 Name 3",
                        "isReserved": false,
                        "shares": 4,
                        "sharesFormat": "4"
                    },
                    {
                        "systemShareholderId": 2761,
                        "customerShareholderId": "2761",
                        "displayShareholderId": "2761",
                        "name": "Jane Doe",
                        "isReserved": true,
                        "shares": 4,
                        "sharesFormat": "4"
                    }
                ]
            },
            {
                "security": "Preferred",
                "totalShares": 250,
                "totalSharesFormat": "250",
                "shareholders": [
                    {
                        "systemShareholderId": 11981,
                        "customerShareholderId": "111144",
                        "displayShareholderId": "111144",
                        "name": "Omario  Housni",
                        "isReserved": false,
                        "shares": 250,
                        "sharesFormat": "250"
                    }
                ]
            },
            {
                "security": "Warrant",
                "totalShares": 8,
                "totalSharesFormat": "8",
                "shareholders": [
                    {
                        "systemShareholderId": 11981,
                        "customerShareholderId": "111144",
                        "displayShareholderId": "111144",
                        "name": "Omario  Housni",
                        "isReserved": false,
                        "shares": 4,
                        "sharesFormat": "4"
                    },
                    {
                        "systemShareholderId": 2825,
                        "customerShareholderId": "2825",
                        "displayShareholderId": "2825",
                        "name": "Olive Yew",
                        "isReserved": false,
                        "shares": 2,
                        "sharesFormat": "2"
                    },
                    {
                        "systemShareholderId": 2826,
                        "customerShareholderId": "2826",
                        "displayShareholderId": "2826",
                        "name": "Olive Yew",
                        "isReserved": false,
                        "shares": 2,
                        "sharesFormat": "2"
                    }
                ]
            },
            {
                "security": "Bond",
                "totalShares": 21510,
                "totalSharesFormat": "21,510",
                "shareholders": [
                    {
                        "systemShareholderId": 11981,
                        "customerShareholderId": "111144",
                        "displayShareholderId": "111144",
                        "name": "Omario  Housni",
                        "isReserved": false,
                        "shares": 21000,
                        "sharesFormat": "21,000"
                    },
                    {
                        "systemShareholderId": 2829,
                        "customerShareholderId": "2829",
                        "displayShareholderId": "2829",
                        "name": "Allie Grater",
                        "isReserved": false,
                        "shares": 400,
                        "sharesFormat": "400"
                    },
                    {
                        "systemShareholderId": 6097,
                        "customerShareholderId": "6097",
                        "displayShareholderId": "6097",
                        "name": "Alekszej Lugovcov",
                        "isReserved": false,
                        "shares": 100,
                        "sharesFormat": "100"
                    },
                    {
                        "systemShareholderId": 4803,
                        "customerShareholderId": "4803",
                        "displayShareholderId": "4803",
                        "name": "A & A Bennett Holdings Pty Ltd",
                        "isReserved": false,
                        "shares": 10,
                        "sharesFormat": "10"
                    }
                ]
            }
        ]
    }



.. _post-generate-diluted-percentage:

:httpmethod:`POST` Report/GenerateDilutedPercentage
-----------------------------------------------------

Description:
~~~~~~~~~~~~~~

Generates a Diluted Percentage Report.

Request Body:
~~~~~~~~~~~~~~~~~
   
.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/cutoff_required.rst

.. include:: definitions/isPDF_required.rst


Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl --silent --location '{{baseurl}}/api/v1/Report/GenerateDilutedPercentage' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data '{
        "customerIssuerId":1128,
        "cutoff":"2023-07-12",
        "isPDF":true
    }'



:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: bash


    {
    "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV1Ipqf4dR3GqLU2YxSgt48du3Ou-WqbxdXRIMvStv89lntvqfGdfX6LyQ2ZsxZ0WwFMw3wS_vPk4-yAYFAGb0J9Db4MTUzzBgXW3rWh-zWHKn0IEFZFbB1y9YZNc7Pqx60Ja_ATwXDQd4iFdYokEiPC/Diluted-Percentage.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV3Hu-jA7zMIrWfSA_7r-cX3Xf7T7H79utc9yZKwgwkaC3Ulo2Fs9kpX0MeahnEHr9HWBUmT5q9jCGVRizTQwdMrjFsCTm6RELhzi72RTLNi_hxxrJKwzMUFG80smDDvI5Y"
    }


.. _post-generate-shareholder-list:

:httpmethod:`POST` Report/GenerateShareholderList
---------------------------------------------------

Description:
~~~~~~~~~~~~

Generates detailed Shareholder List Reports.


Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/cutoff_optional.rst

.. include:: definitions/isPDF_optional.rst

.. include:: definitions/customerShareholderId_optional.rst

.. include:: definitions/showCertificateDetails_optional.rst

.. include:: definitions/showAddressInfo_optional.rst

.. include:: definitions/showContactInfo_optional.rst

.. include:: definitions/showTaxId_optional.rst

.. include:: definitions/hideCanceledDateIfGreaterThanCutoff_optional.rst

.. include:: definitions/includeAccessCode_optional.rst

.. include:: filterSecurityType_optional.rst


.. include:: definitions/prefix_optional.rst



.. include:: definitions/certificateInfoStatus_required.rst


.. include:: definitions/restrictionStatus_required.rst

.. include:: definitions/addressStatus_required.rst



.. include:: definitions/includeTaxLots_optional.rst


Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateShareholderList' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data '{        
            "CustomerIssuerId":1128,            
            "Cutoff":"2023-07-12",        
            "IsPDF":true,
            "CustomerShareholderId":"",            
            "ShowCertificateDetails":true,
            "ShowAddressInfo":true,
            "ShowContactInfo":true,
            "ShowTaxId":false,
            "HideCanceledDateIfGreaterThanCutoff":true,
            "IncludeAccessCode":false,
            "FilterSecurityType":{
                "SecurityTypeCode":"",                
                "SecuritySeriesCode":""                
            },
            "Prefix":null,
            "IncludeTaxLots":false,            
            "certificateInfoStatus": "All",            
            "restrictionStatus": "All",            
            "addressStatus":"All"            
        }'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    
    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV2wcEw561cMP_pbSIaQkCXKbNmn6KI7RdZevTxnss634C7FI4lY-qsTUGCvoV7wohmATPxQb-Lf33SVyEm8KR1bbEJCf-HopdqUBbOGFkY2ri67QaY-KE9IL7M8LuUXQcFv7WNVzx0YWZ75P9qrjNrg/Shareholder-List.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV3h8RXKra1JIG5uf2274pKFfrJdFZ8UGyxvi63k9At7cDCyuT8LW1tGKDDF9ZwpTZz14s1mALgR1PWSr8qLNLKaaMJvdz5XNTJUf0LHfbcGp_3BabbmbG3ZGnSBr0ChtC0"
    }






.. _post-generate-holdings-statement:

:httpmethod:`POST` Report/GenerateHoldingsStatement
-----------------------------------------------------







Description:
~~~~~~~~~~~~~

Generates a Holding Statement.

Request Body:
~~~~~~~~~~~~~~~~~


    
.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst
    
.. include:: definitions/isPDF_optional.rst

.. include:: definitions/cutoff_optional.rst

.. include:: definitions/customerShareholderId_required.rst

.. include:: definitions/status_required.rst

.. include:: filterSecurityType_optional.rst








Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateHoldingsStatement' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>'\
        --data '{
            "CustomerIssuerId":1128,     
            "Cutoff":"2023-11-14",   
            "IsPDF":true,
            "CustomerShareholderId":"A-2751",   
            "FilterSecurityType":{
                "SecurityTypeCode":"",
                "SecuritySeriesCode":""        
            },
            "Status":"All"
        }'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV1QU_bcrzB7OMDIk4Rj96uf1rOh9P5X7HyHX1fM0NW3T6fXv7JC_hDGMdgiUCY3PJjVs935UeZ_7u7mMBd9E57-v7vKZS_8DYhVFd51dSc3S6LO3wS4H_JWT071KDPm3jmAy-5IN0CiHNc-P1h-erG4/holdings-statement.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV1UQ_FD2CjSQMgfGvT16Lp78h6vl9iWJKej-DkXuTkMTbrH1cPoQhm6k5K5Gh1Uh6n3wihmDYjTpXT9ZP_zhgmrTU7g38P_mn3WscfOJb1L99imnDX1yeDXmRJljxeN420"
    }







.. _post-generate-drs-statement:

:httpmethod:`POST` Report/GenerateDRSStatement
-----------------------------------------------




Description:
~~~~~~~~~~~~

Generates a DRS statement.

Request Body:
~~~~~~~~~~~~~~~~~


.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/isPDF_optional.rst

.. include:: definitions/cutoff_optional.rst

.. include:: definitions/customerShareholderId_optional.rst

.. include:: filterSecurityType_required.rst








Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateDRSStatement' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>'\
        --data '{
            "CustomerIssuerId":1128, 
            "Cutoff":"2023-07-12",
            "IsPDF":true,
            "CustomerShareholderId":"A-2751",
            "FilterSecurityType":{
                "SecurityTypeCode":"",
                "SecuritySeriesCode":""
            }
        }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: bash

    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV1MgiNYlrXARXztdal9Bfjp4AlskfjaGeYNaNAvkykFAtxJZgWKGMv7FN0_7833paOaUVgRncSWlU6vW1Cmn9v7n2PAhB23UPuWsMzCmA_MkFqJvk_7CTlxCBGtyt0hqnfuj5-CM4kXAv_qVvw9-yqW/drs-statement.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV1OojEp18qP2BaqvfxmvSZyUcIHL5y-tPM5HxEJRlKQJiJ42F7e7h8ZygwvNaKkNewYAP7JiyBVtxdb9cAjGX2RMyKAI6XXoNxjjuEulGQalrRUrzXFt_DrDcBsos1_YKE"
    }


.. _post-generate-rejection-list:

:httpmethod:`POST` Report/GenerateRejectionList
-------------------------------------------------

Description:
~~~~~~~~~~~~

Generates a Rejection List.


Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/type_required.rst

.. include:: definitions/startDate_optional.rst

.. include:: definitions/endDate_optional.rst

.. include:: definitions/includeInvoiceNumber_required.rst

.. include:: definitions/isPDF_required.rst







Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateRejectionList' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data '{
            "CustomerIssuerId":10000,
            "Type":"MasterRejection",
            "StartDate":"2016-01-31",
            "EndDate":"2023-07-31",
            "IncludeInvoiceNumber":false,
            "IsPDF":true   
        }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV2ISH2DjgT1oPl3XFxDrhUrD-oz1JTss0wRLUmKOBJd-XbtFkSTkAVBIorFv-ouatD-npnrXF9hJzhm6XofUZS1GH7G8L7sHo4EezhT4rnT7P2wNWrAPNWduhdOX7AUBLvNKNi_KjO88AbO1bwByukj/rejection-list.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV1uJDuq4x7wFpZHSfRd52zqBvTcKJTiNxlzmzGshksdBP4CyXPJVTs8kW_A2VMaIGS7sd9Mj9M25LZLXxiqRz7rvYQQdMqmS8H6ZhwJDim5pnnUaJx1PoOtUw14Be-OsNc"
    }

.. _post-generate-issuer-contacts:

:httpmethod:`POST` Report/GenerateIssuerContacts
--------------------------------------------------

Description:
~~~~~~~~~~~~~~

Generates a downloadable report of an Issuer's Contacts.

Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/contact_status_required.rst

.. include:: definitions/isPDF_required.rst



Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateIssuerContacts' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data '{
            "CustomerIssuerId":10000,
            "Status":"All",   
            "IsPDF":true   
        }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    {
    "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV3TVlIlVToEtV9JxVsr60VJ9LfP5N-Z8ixV--kX5sZDx4gQ5fAgbThffG-65kc1nf5i_KVCvU6NNdySDDC5F25-DwAmpOTu1fbUiKFjjMHDX7FSMT-tz7D0L2jLoKocuXGltF18Zi7gCCFuQjtNUliv/issuer-contacts.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV0VroFVLDVFwKMNCcIMM3Bk2Au3I7Em45KWbeNXzi4A4NWbnRFYwBm5U3P8HMm8jPZSuHIKOtHqYHrZhAZ-vnxNJt136Oc_VVMPgNaiFSM_rTBjrd5S3InvFcm6BKJhANs"
    }



.. _post-generate-mailing-labels:

:httpmethod:`POST` Report/GenerateMailingLabels
-------------------------------------------------

Description:
~~~~~~~~~~~~

Generates mailing labels for an Issuer.



Request Body:
~~~~~~~~~~~~~~~~~


.. include:: definitions/initial_parameter_bar.rst


.. include:: definitions/customerIssuerId_required.rst

.. include:: labelType_with_note_optional.rst

.. include:: definitions/cutoff_required.rst


.. include:: definitions/restriction_required.rst


.. include:: definitions/addressStatus_required.rst


.. include:: definitions/holdingStatus_optional.rst







Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash


    curl --silent --location '{{baseurl}}/api/v1/Report/GenerateMailingLabels' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data '{
        "CustomerIssuerId":9999,
        "Cutoff":"2023-07-12",
        "Restriction":"All",
        "AddressStatus":"GoodAddress",
        "HoldingStatus":"All",
        "labelType":"AVERY5160"
    }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
    
    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV01DSiZEIqd_29RmVlRL0HmNCbrPj6lxxf1SQ9Ki1OSNSrTrU-BrZ6z2_kHAeQ9hTm2hzDbhpTErXLntnxsRSzaz3xl53MMQ1lARAWQRZ-kYbKjYXeSQy5lWUZUGUpRPEGWreT8VEBrHPFSSqg1gfEe/mailing-labels.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV0QQLTel3EF5cxAHqNaPc4MIZdt6PIL1Y9yqTaULcnfYu_6yiOGWYy-MZ_Vu7g81l_oc6h27t0b2PDzia4LxK_hS2XsZzaWFoG51sDTlGF3lcF7xqRfABVh8UzBQ4YTbzg"
    }


.. _get-download-report:

:httpmethod:`GET` :medium-titles:`Report/DownloadReport/{fileCode}/{fileName}/{accessCode}`
--------------------------------------------------------------------------------------------------


Description:
~~~~~~~~~~~~~~

Allows for the downloading of a report.

Query Parameters:
~~~~~~~~~~~~~~~~~


.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/fileCode_required.rst

.. include:: definitions/fileName_required.rst

.. include:: definitions/accessCode_required.rst





Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl -X GET "http://sandboxapi.transfersolo.com/api/v1/Report/DownloadReport/123/ExampleFile/111 \
    -H "accept:text/plain" \


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV01DSiZEIqd_29RmVlRL0HmNCbrPj6lxxf1SQ9Ki1OSNSrTrU-BrZ6z2_kHAeQ9hTm2hzDbhpTErXLntnxsRSzaz3xl53MMQ1lARAWQRZ-kYbKjYXeSQy5lWUZUGUpRPEGWreT8VEBrHPFSSqg1gfEe/mailing-labels.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV0QQLTel3EF5cxAHqNaPc4MIZdt6PIL1Y9yqTaULcnfYu_6yiOGWYy-MZ_Vu7g81l_oc6h27t0b2PDzia4LxK_hS2XsZzaWFoG51sDTlGF3lcF7xqRfABVh8UzBQ4YTbzg"
    }



