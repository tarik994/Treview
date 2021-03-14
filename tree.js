

var app = angular.module('app', []);


app.controller('mainController', function ($scope) {

    
    /*
    $scope.treeData = [
        {
            name: 'e2e', children: [
                { name: 'e2e.script.test.js'}
            ],
           
            
        },

        {
            name: 'node_modules', children: [
                { name: 'e2e.script.test.js' }
            ],
           
           
        },
       {
           name:'src', 
           children:[
               {
                   name:'app', 
                   children:[
                       {name:'app.components.css'},
                       {name:'app.components.css'},
                       {name:'app.components.css'},
                       {name:'app.components.css'},
                       {name:'app.components.css'}
                      
                   ],
                   
                
            },
                   {name:'app.components.css'},
                   {name:'app.components.html'},
                   {name:'app.components.spec.ts'},
                   {name:'app.components.ts'},
                   {name:'app.module.ts'}
           ],
        
       }
    ]

    */


    $scope.treeData = [
        {name:'e2e', children:[
          {name: 'e2e.script.test.js'}  
        ]},

        {
            name: 'node_modules', children:[
                {name: 'e2e.script.test.js'}
            ]
        },

        {
            name:'src',children:[
                {name:'treview',
            children:[
                {name:'treview.components.css'},
                {name:'treview.components.html'},
                {name:'treview.components.spec.css'},
                {name:'treview.components.ts'},
                {name:'treview.module.ts'}
            ]},
                {name:'app.component.css'},
                {name:'app.component.html'},
                {name:'app.spec.ts'},
                {name:'app.component.ts'},
                {name:'app.module.ts'}
            ]
        }

    ]
});




