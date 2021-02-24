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
- _Data fetching from .NET Core API_
- _Fetched data is stored in a SQL database_
- _Files are stored in Azure Blob Container_
- _Azure Function is triggered on file upload in the container and inserts data in a database._
<a href="https://github.com/BaiGanio/IntroCSharp/Images">
    <img src="https://raw.githubusercontent.com/BaiGanio/IntroCSharp/master/Images/intro-c-sharp.jpg" />
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

## Total time for complete solution

- 16
