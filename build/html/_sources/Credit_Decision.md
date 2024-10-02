




# Credit Decision











## Endpoints:







- :httpmethod-small-post:`POST` {ref}`post-credit-decision`





- :httpmethod-small-get:`POST` :ref:`Dividend/GenerateDividendDetails <generate-dividend-details>`






(get-dividend-list)=


## :httpmethod:`POST` /credit-decision








### Description:


Make a credit decision based on customer data.


** Description:**  This endpoint evaluates customer data to make a credit approval decision.



**OperationID:** creditDecision


Query Parameters:
~~~~~~~~~~~~~~~~~


.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst
   

Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Dividend/GetList?customerIssuerId=1127' \
        --header 'Authorization: Bearer <YOUR TOKEN>'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json
    
    [
        {
            "dividendId": 2042,
            "type": "Cash",
            "security": "Preferred",
            "payable": "8/20/2018",
            "recordDate": "1/11/2019",
            "ratio": "1 for $3.00",
            "oustandingShares": 250,
            "outstandingSharesFormat": "250",
            "distributionAmount": 750,
            "distributionAmountFormat": "$750.00",
            "fractionalType": "Rounded Down",
            "cashPerShare": null,
            "cashPerShareFormat": ""
        },
        {
            "dividendId": 4055,
            "type": "Stock",
            "security": "Common",
            "payable": "3/24/2020",
            "recordDate": "3/24/2020",
            "ratio": "1 for 1.6434",
            "oustandingShares": 6463100,
            "outstandingSharesFormat": "6,463,100",
            "distributionAmount": 10621438,
            "distributionAmountFormat": "10,621,438",
            "fractionalType": "Pay in Cash",
            "cashPerShare": 2,
            "cashPerShareFormat": "$2.00"
        },
        {
            "dividendId": 2041,
            "type": "Stock",
            "security": "Common",
            "payable": "8/21/2018",
            "recordDate": "8/20/2018",
            "ratio": "1 for 2",
            "oustandingShares": 42600,
            "outstandingSharesFormat": "42,600",
            "distributionAmount": 85200,
            "distributionAmountFormat": "85,200",
            "fractionalType": "Rounded Up",
            "cashPerShare": 2.5,
            "cashPerShareFormat": "$2.50"
        },
        {
            "dividendId": 2043,
            "type": "Cash",
            "security": "Common",
            "payable": "8/27/2018",
            "recordDate": "8/23/2018",
            "ratio": "1 for $2.00",
            "oustandingShares": 163950,
            "outstandingSharesFormat": "163,950",
            "distributionAmount": 327900,
            "distributionAmountFormat": "$327,900.00",
            "fractionalType": "Rounded Down",
            "cashPerShare": null,
            "cashPerShareFormat": ""
        },
        {
            "dividendId": 2044,
            "type": "Stock",
            "security": "Common",
            "payable": "8/29/2018",
            "recordDate": "8/29/2018",
            "ratio": "1 for 2",
            "oustandingShares": 163950,
            "outstandingSharesFormat": "163,950",
            "distributionAmount": 327900,
            "distributionAmountFormat": "327,900",
            "fractionalType": "Pay in Cash",
            "cashPerShare": 2,
            "cashPerShareFormat": "$2.00"
        },
        {
            "dividendId": 2045,
            "type": "Stock",
            "security": "Common",
            "payable": "9/11/2018",
            "recordDate": "9/11/2018",
            "ratio": "1 for 2",
            "oustandingShares": 491850,
            "outstandingSharesFormat": "491,850",
            "distributionAmount": 983700,
            "distributionAmountFormat": "983,700",
            "fractionalType": "Pay in Cash",
            "cashPerShare": 2,
            "cashPerShareFormat": "$2.00"
        },
        {
            "dividendId": 2046,
            "type": "Cash",
            "security": "Common",
            "payable": "9/18/2018",
            "recordDate": "9/14/2018",
            "ratio": "1 for $2.00",
            "oustandingShares": 1475550,
            "outstandingSharesFormat": "1,475,550",
            "distributionAmount": 2951100,
            "distributionAmountFormat": "$2,951,100.00",
            "fractionalType": "Rounded Down",
            "cashPerShare": null,
            "cashPerShareFormat": ""
        },
        {
            "dividendId": 2047,
            "type": "Stock",
            "security": "Common",
            "payable": "9/20/2018",
            "recordDate": "9/20/2018",
            "ratio": "1 for 2",
            "oustandingShares": 1439400,
            "outstandingSharesFormat": "1,439,400",
            "distributionAmount": 2878800,
            "distributionAmountFormat": "2,878,800",
            "fractionalType": "Pay in Cash",
            "cashPerShare": 2,
            "cashPerShareFormat": "$2.00"
        }
    ]


.. _generate-dividend-details:

:httpmethod:`POST` Dividend/GenerateDividendDetails
-----------------------------------------------------

Description:
~~~~~~~~~~~~~~

Generates a detailed report for a given dividend.

Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/dividendId_required.rst

.. include:: definitions/isPDF_required.rst


Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl --silent --location '{{baseurl}}/api/v1/dividend/generatedividenddetails' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data '{
        "dividendId":4059,           
        "isPDF":true   
    }'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
        "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV0jFreDl552uI6YQ5enntFyUqg4WgDtMO56PfG50Xk9e_wz9a-38A-nBKdxZvJSz5vM_ZAoTdzvM5mqfRch1N-YGT5ErhQ1yQpYRbGdXS2_VB4Uw_JBLLmaZsyCWZMC4WObnXnlCIOGzAFtBMuFs6AT/dividend-4059.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV30kJSZsZcu3cvfJwPljBGj-yrKmvV4Z6EiH0tssHVmtnfQ2omDWfnWJdzZ88wBe9KOGS6qS5GJdFzwt3fa2-T9Gd6YpF7pscWQvREwSOyep2YnaWtm-dXP_eHyM-8FVvo"
    }


