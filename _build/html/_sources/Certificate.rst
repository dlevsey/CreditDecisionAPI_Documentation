Certificate
============

Allows you to retrieve a list of certificates.
 

Endpoints:
--------------

- :httpmethod-small-get:`GET` :smaller-titles:`Certificate/GetHoldingCertificates`

..

..


:httpmethod:`GET` Certificate/GetHoldingCertificates
-----------------------------------------------------


Description:
~~~~~~~~~~~~~

Retrieve a list of certificates.

Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/customerShareholderId_optional.rst
    
.. include:: definitions/filterStatus_required.rst



Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location '{{baseurl}}/api/v1/Certificate/GetHoldingCertificates?CustomerIssuerId=1128&CustomerShareholderId=A-2751&filterStatus=All' \
        --header 'Authorization: Bearer <YOUR TOKEN>' 

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
        "controlCertificateId": 66634,
        "customerCertificateId": 9120982,
        "prefixAndCertificateNumber": "B-1112",
        "issued": "10/29/2018",
        "canceled": "",
        "security": "Common",
        "restriction": "No Restriction",
        "stop": "",
        "shares": 17,
        "postReverseSplit": true
    }





       


    
       
