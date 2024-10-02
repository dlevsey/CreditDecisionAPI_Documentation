Proxy
=======

Resource and endpoints for proxy related operations.

Endpoints:
-----------




- :httpmethod-small-get:`GET` :ref:`Proxy/GetList <get-proxy-list>`

..

..



- :httpmethod-small-post:`POST` :ref:`Proxy/GenerateProxyDetails <get-generate-proxy-details>`

..

..


.. _get-proxy-list:

:httpmethod:`GET` Proxy/GetList
--------------------------------

Description:
~~~~~~~~~~~~~


Retrieves a list of proxies.

Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Proxy/GenerateProxyDetails' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Bearer <YOUR TOKEN>' \
        --data '{
            "customerProxyId":1127  
        }'


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    [
        {
            "proxyId": 302100,
            "issuer": "Alaska Air Group, Inc.",
            "security": "Common",
            "totalShares": 492350,
            "totalSharesFormat": "492,350",
            "totalVotedShares": 0,
            "totalVotedSharesFormat": "0",
            "title": "proxy 10",
            "quorum": "10%",
            "recordDate": "8/30/2018",
            "mailingDate": "8/31/2018",
            "meetingDateTime": "10/31/2018 @ 07:00 AM PST",
            "voteCloseDateTime": "11/01/2018 @ 07:00 AM PST",
            "status": "Closed"
        },
        {
            "proxyId": 3029,
            "issuer": "Alaska Air Group, Inc.",
            "security": "Common",
            "totalShares": 6463100,
            "totalSharesFormat": "6,463,100",
            "totalVotedShares": 1500,
            "totalVotedSharesFormat": "1,500",
            "title": "proxy2",
            "quorum": "2%",
            "recordDate": "10/28/2019",
            "mailingDate": "",
            "meetingDateTime": "10/31/2019 @ 07:00 AM PST",
            "voteCloseDateTime": "",
            "status": "Closed"
        },
        {
            "proxyId": 3020,
            "issuer": "Alaska Air Group, Inc.",
            "security": "Common",
            "totalShares": 6463000,
            "totalSharesFormat": "6,463,000",
            "totalVotedShares": 0,
            "totalVotedSharesFormat": "0",
            "title": "Best test",
            "quorum": "2%",
            "recordDate": "10/22/2018",
            "mailingDate": "10/23/2018",
            "meetingDateTime": "11/10/2018 @ 07:00 AM PST",
            "voteCloseDateTime": "11/16/2018 @ 08:00 PM PST",
            "status": "Closed"
        }
    ]


.. _get-generate-proxy-details:


:httpmethod:`POST` Proxy/GenerateProxyDetails
---------------------------------------------

Description:
~~~~~~~~~~~~~

Generates details for a specific proxy.

Request Body:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerProxyId_required.rst

.. include:: definitions/includeNotVotedShares_required.rst

.. include:: definitions/isPDF_required.rst

Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl --silent --location '{{baseurl}}/api/v1/Proxy/GenerateProxyDetails' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data '{
        "customerProxyId":3029, 
        "includeNotVotedShares":true,
        "isPDF":true   
    }'

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
    "downloadUrl": "{{baseurl}}/Api/v1/Report/DownloadReport/CfDJ8G2a_F-j-rtGiUBjbT5isV09BVpVehT24o8YZJjnpIaz-FE8LPFSN4SVvcZxgrpQJaV5E9vCsWrGcytlXYNEV_hJawiszPIEoVJdX0M7Nn69PZOTO6A4ulz7fCnk8wQ5nQuR_gFIR2St2FSOVG3LuZAmUEcstEMuzNbAd9cBEJea/proxy-3029.pdf/CfDJ8G2a_F-j-rtGiUBjbT5isV0GdswlqrZFUtmb0EoHcEuQ2yBeKQnfHvvI12VVFtjOZKA9J_bHW26zD84_eZ3Y84dUNfVfi69veuQ1SPXWEuofzRKX_6pE8_V0qhc02hFs0NAGJWbQR-5URn1jsAzZqCc"
    }

