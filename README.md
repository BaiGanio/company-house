# Company House
Basic example including:
 - Angular (FE)
   - CI/CD pipe
   - GitHub Pages hosting
 - .NET Core API (BE)
   - CI/CD pipe
   - Azure websites hosting
 - MS SQL Server (data store)
   - Azure hosting
 - Azure Function (event triggered)
   - Azure hosting
 - Azure Blob Storage Container (file storage)
   - Azure hosting
***
## How it works

- _FE Angular project allows you to search data for any company in the register. (which register?)_
  - Found:
  - <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
  <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
</a>
  - Not Found:
  - <a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
  <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
</a>
- _Data fetching from .NET Core API_
- _Fetched data is stored in a SQL database_
- _File upload in Azure Blob Container_
<a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/file-upload-azure-blob-container.gif">
    <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/file-upload-azure-blob-container.gif" />
</a>
- _Azure Function is triggered 
  - read data from uploaded file
  - inserts custom data in a database
  - log custom events via Application Insights
<a href="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif">
  <img src="https://raw.githubusercontent.com/BaiGanio/company-house/matser/readme-files/catch-and-log-important-events-appinsight.gif" />
</a>
***
## Steps taken

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
   - FE form creation
   - FE form error adjustments
   - initial explenations in ReadMe.md 
***
## Total time for complete solution

- ~ 16 hours
