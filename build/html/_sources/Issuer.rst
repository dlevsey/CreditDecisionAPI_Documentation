Issuer
========

Resource used for managing Issuers.

Endpoints:
----------

- :httpmethod-small-get:`GET` :ref:`Issuer/GetIssuerSecurityTypes <get-issuer-security-types>`

..

..

- :httpmethod-small-get:`GET` :ref:`Issuer/GetIssuerActiveCertificateDefinitions <get-issuer-active-certificate-definitions>`


..

..

- :httpmethod-small-get:`GET` :ref:`Issuer/GetTransferAgentIssuers <get-transfer-agent-issuers>`

..

..

- :httpmethod-small-get:`GET` :ref:`Issuer/GetIssuerBalance <get-issuer-balance>`

..

..


.. _get-issuer-security-types:

:httpmethod:`GET` Issuer/GetIssuerSecurityTypes
------------------------------------------------


Description:
~~~~~~~~~~~~~~


Retrieves security types associated with an Issuer.


Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst





Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Issuer/GetIssuerSecurityTypes?customerIssuerId=129' \
        --header 'Authorization: Bearer <YOUR TOKEN>'

Example Response:
~~~~~~~~~~~~~~~~~~

.. code-block:: json 

    [
        {
            "securityTypeId": 1,
            "securityType": "Common",
            "securityTypeCode": "C",
            "securitySeriesCode": ""
        },
        {
            "securityTypeId": 2,
            "securityType": "Warrant",
            "securityTypeCode": "W",
            "securitySeriesCode": ""
        },
        {
            "securityTypeId": 6,
            "securityType": "Preferred",
            "securityTypeCode": "P",
            "securitySeriesCode": ""
        }
    ]   


.. _get-issuer-active-certificate-definitions:

:httpmethod:`GET` Issuer/GetIssuerActiveCertificateDefinitions
----------------------------------------------------------------

Description:
~~~~~~~~~~~~~~

Provides Active Certificate definitions for an Issuer.

Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst





Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

  curl --silent --location '{{baseurl}}/api/v1/Issuer/GetIssuerActiveCertificateDefinitions?customerIssuerId=129' \
    --header 'Authorization: Bearer <YOUR TOKEN>'


Example Response:
~~~~~~~~~~~~~~~~~~

.. code-block:: json

    [
        {
            "certificateDefinitionId": 2280,
            "prefix": "C",
            "isBook": false,
            "securityType": "Common"
        },
        {
            "certificateDefinitionId": 2281,
            "prefix": "P",
            "isBook": false,
            "securityType": "Preferred"
        },
        {
            "certificateDefinitionId": 2282,
            "prefix": "BAL",
            "isBook": true,
            "securityType": "Common"
        },
        {
            "certificateDefinitionId": 2283,
            "prefix": "BAL",
            "isBook": true,
            "securityType": "Warrant"
        },
        {
            "certificateDefinitionId": 2329,
            "prefix": "BE",
            "isBook": true,
            "securityType": "Common"
        }
    ]

.. _get-transfer-agent-issuers:


:httpmethod:`GET` Issuer/GetTransferAgentIssuers
-------------------------------------------------

Description:
~~~~~~~~~~~~~~


Retrieves a list of Issuerrs that use Transfer Agents to maintain their Securities and Shareholder Registries.

Query Parameters:
~~~~~~~~~~~~~~~~~

.. note:: This endpoint does not require any query parameters.


Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --location '{{baseurl}}/api/v1/Issuer/GetIssuerActiveCertificateDefinitions?customerIssuerId=129&systemControlIssuerId=null' \
        --header 'Authorization: Bearer <YOUR TOKEN>'




Example Response:
~~~~~~~~~~~~~~~~~~

.. code-block:: json

    [
        {
            "certificateDefinitionId": 2280,
            "prefix": "C",
            "isBook": false,
            "securityType": "Common"
        },
        {
            "certificateDefinitionId": 2281,
            "prefix": "P",
            "isBook": false,
            "securityType": "Preferred"
        },
        {
            "certificateDefinitionId": 2282,
            "prefix": "BAL",
            "isBook": true,
            "securityType": "Common"
        },
        {
            "certificateDefinitionId": 2283,
            "prefix": "BAL",
            "isBook": true,
            "securityType": "Warrant"
        },
        {
            "certificateDefinitionId": 2329,
            "prefix": "BE",
            "isBook": true,
            "securityType": "Common"
        }
    ]


.. _get-issuer-balance:


:httpmethod:`GET` Issuer/GetIssuerBalance
-------------------------------------------

Description:
~~~~~~~~~~~~~~

Retrieves balance for a given Issuer.


Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: filterSecurityType_optional.rst

.. include:: definitions/restrictionStatus_optional.rst

.. include:: definitions/cutoff_optional.rst


Example Request:
~~~~~~~~~~~~~~~~
    
.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Issuer/GetIssuerBalance?CustomerIssuerId=129&CutoffDate=2023-08-07&FilterSecurityType=null&SecurityTypeCode=null&SecuritySeriesCode=null&RestrictionStatus=All' \
        --header 'Authorization: Bearer <YOUR TOKEN>'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    [
        {
            "issuerId": 129,
            "customerIssuerId": 129,
            "className": "C",
            "totalShareholder": 9,
            "securityID": 1,
            "securityDescription": "Common",
            "authorizedShares": 35352323,
            "authorizedSharesFormat": "35,352,323",
            "totalIssuedShares": 439955,
            "totalIssuedSharesFormat": "439,955",
            "totalOutstandingShares": 439955,
            "totalOutstandingSharesFormat": "439,955",
            "totalReserveShares": 0,
            "totalReserveSharesFormat": "0",
            "totalRestrictedShares": 379745,
            "totalRestrictedSharesFormat": "379,745",
            "totalNonRestrictedShares": 60210,
            "totalNonRestrictedSharesFormat": "60,210",
            "isUnlimited": false,
            "dollarFormat": false
        },
        {
            "issuerId": 129,
            "customerIssuerId": 129,
            "className": "W",
            "totalShareholder": 2,
            "securityID": 2,
            "securityDescription": "Warrant",
            "authorizedShares": 36363262,
            "authorizedSharesFormat": "36,363,262",
            "totalIssuedShares": 2500,
            "totalIssuedSharesFormat": "2,500",
            "totalOutstandingShares": 2500,
            "totalOutstandingSharesFormat": "2,500",
            "totalReserveShares": 0,
            "totalReserveSharesFormat": "0",
            "totalRestrictedShares": 0,
            "totalRestrictedSharesFormat": "0",
            "totalNonRestrictedShares": 2500,
            "totalNonRestrictedSharesFormat": "2,500",
            "isUnlimited": false,
            "dollarFormat": false
        },
        {
            "issuerId": 129,
            "customerIssuerId": 129,
            "className": "P",
            "totalShareholder": 2,
            "securityID": 6,
            "securityDescription": "Preferred",
            "authorizedShares": 10000000,
            "authorizedSharesFormat": "10,000,000",
            "totalIssuedShares": 162,
            "totalIssuedSharesFormat": "162",
            "totalOutstandingShares": 162,
            "totalOutstandingSharesFormat": "162",
            "totalReserveShares": 0,
            "totalReserveSharesFormat": "0",
            "totalRestrictedShares": 0,
            "totalRestrictedSharesFormat": "0",
            "totalNonRestrictedShares": 162,
            "totalNonRestrictedSharesFormat": "162",
            "isUnlimited": false,
            "dollarFormat": false
        }
    ]


