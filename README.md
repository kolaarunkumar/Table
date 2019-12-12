This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `columns` array

Example :
let columns = [ 
    {  "id": "firstName",  "label": "First Name",  "sortable": "true",  "filterable": "true" }, 
    {  "id": "lastName",  "label": "Last Name",  "sortable": "true",  "filterable": "true" }, 
    {  "id": "dateOfBirth",  "label": "Date of Birth",  "sortable": "false",  "filterable": "true" }, 
    {  "id": "designation",  "label": "Designation",  "sortable": "true",  "filterable": "true" }, 
    {  "id": "department",  "label": "Department",  "sortable": "true",  "filterable": "true" }   ]
    
  ### `Data` array
  
  Example :
  
 let data =  [ 
    {  
      "id": "user_id_1",  
      "data": [  
        {  "id": "firstName",  "value": "John"  },  
        {  "id": "lastName",   "value": "Smith"  },  
        {  "id": "dateOfBirth",  "value": "07-11-1992"  },  
        {  "id": "designation",  "value": "Software Engineer"  },  
        {  "id": "department",  "value": "Web"  }   
        ] 
    }, 
    {  
      "id": "user_id_2",  
      "data": [  
        {  "id": "firstName",  "value": "Jane"  },  
        {  "id": "lastName",  "value": "Doe"  },  
        {  "id": "dateOfBirth",  "value": "07-11-1995"  },  
        {  "id": "designation",  "value": "Intern"  },  
        {  "id": "department",  "value": "Mobile"  }   
        ] 
    }
  ] 
