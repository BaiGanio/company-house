# Company House

_Basic data fetching example including:_
 - Angular (FE)
   - GitHub project
   - CI/CD pipe
   - GitHub Pages hosting
   - UEX thanx to Bootstrap v5
 - .NET Core API (BE)
   - AzureDevOps project
   - CI/CD pipe
   - Azure Cloud websites hosting
   - v3.1 framework based
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

- _FE Angular project allows you to search data for any company in the register. (which register?)_

  - Found:
  
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
  </a>

  - Not Found:
  
  <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
  </a>
  
***
- _Data fetching is performed via .NET Core API which feeds from data stored in a SQL database_
- _API could be live tested at this address -> [https://test-bgapi.azurewebsites.net/swagger/index.html](https://test-bgapi.azurewebsites.net/swagger/index.html)_
    
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
  - log custom events via Application Insights orother vendors
  
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
   - Work on presentation walktrough in ReadMe.md 
 - Step 6
   - FE form creation
   - FE form error adjustments   
  
***
***
## _Total time for MVP solution:_

- ~ 22 hours
