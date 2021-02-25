# Company House

_Basic data fetching example including:_
 - Angular (FE)
   - GitHub project
   - CI/CD pipe
   - GitHub Pages hosting
   - UEX thanx to Bootstrap v5
   - website: [https://baiganio.github.io/company-house/](https://baiganio.github.io/company-house/)
 - .NET Core API (BE)
   - AzureDevOps project
   - CI/CD pipe
   - Azure Cloud websites hosting
   - v3.1 framework based
   - website: [https://test-bgapi.azurewebsites.net/](https://test-bgapi.azurewebsites.net/)
   - repo: [https://dev.azure.com/teamkepler/BGAPI](https://dev.azure.com/teamkepler/BGAPI)
 - MS SQL Server (data store)
   - Azure Cloud hosting
 - Azure Function (event triggered)
   - C# baked
   - Azure Cloud hosting
 - Azure Blob Storage Container (file storage)
   - Azure Cloud hosting
   
***
***
## _How it works:_

- _To resolve shared hosting delays - top 5 companies are fetched from the database and are taken for the demo_
- _FE Angular project allows you to search data for any company in the register. (which register?)_

  - With Found Data:
  
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/serch-result-top-5.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/serch-result-top-5.gif" />
  </a>

  - Without Found Data:
  
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/no-serch-result.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/no-serch-result.gif" />
  </a>
  
***
- _Data fetching is performed via .NET Core API which feeds from data stored in a SQL database_
- _API could be live tested at this address -> [https://test-bgapi.azurewebsites.net/swagger/index.html](https://test-bgapi.azurewebsites.net/swagger/index.html)_
  - result is list of companies which contains the query parameter in their own names
  
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/api-swagger.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/api-swagger.gif" />
  </a>
  
***
- _File upload in Azure Blob Container_

<a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/file-upload-azure-blob-container.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/file-upload-azure-blob-container.gif" />
</a>

***
- _Azure Function is triggered which automates several processes at once:_
  - read data from uploaded file
  - inserts custom data in a database
  - log custom events via Application Insights or other vendors
  - in the example :
    - are shown total rows ready to be inserted in the database
    - warning and exception message for ech record failed to be inserted into databse
    
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
  </a>

***
***
## _Steps taken:_

- Step 1
  - creating project with basic implementation
  - initial FE adjustments for GitHub pages
  - configuring pipeline
- Step 2
  -  creating Azure function
  -  creating DB model
  -  testing event triggering on file upload
  -  testing inserting records in DB table
- Step 3
  - hooking up BE & FE
  - polished file upload and data insertion
  - testing fetching data and resolving bugs found
  - CORS adjustments
- Step 4
  - real data fetching polishing
  - initial data view component creation
  - service creation
  - aligning dev and prod env 
 - Step 5
   - work on presentation walktrough in ReadMe.md 
   - final polishing
  
***
***
## _Total time for MVP solution:_

- ~ 16 - 18 hours
