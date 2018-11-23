// Create a Module
var app = angular.module('AdminDashboardApp',[]);

// Create a Controller
app.controller('AdminDashboardAppCtrl',function() {
    this.taskSearch = '';
    this.category_search = '';
    this.employeeSearch = '';
    this.category_name = '';
    this.employees = [
        {
            employee_number : 1001,
            employee_name : 'Rajan Jain',
            employee_email : 'rajan@infosys.com',
            employee_mobile : 9844758525,
            basic_skill : 'Java',
            task_number : 1,
            task_name : 'Automation emails',
            task_level : 'Medium',
            task_category : 'Development'
        },
        {
            employee_number : 1002,
            employee_name : 'Uttam Jain',
            employee_email : 'uttam@infosys.com',
            employee_mobile : 9878758525,
            basic_skill : 'Node JS',
            task_number : 1,
            task_name : 'Watch Server issue',
            task_level : 'High',
            task_category : 'TroubleShooting'
        },
        {
            employee_number : 1003,
            employee_name : 'Naveen Saggam',
            employee_email : 'naveen@infosys.com',
            employee_mobile : 9878789854,
            basic_skill : 'Front End',
            task_number : 11,
            task_name : 'Profile Page Design',
            task_level : 'Medium',
            task_category : 'Development'
        },
        {
            employee_number : 1004,
            employee_name : 'Rahul Devan',
            employee_email : 'rahul@infosys.com',
            employee_mobile : 7895487896,
            basic_skill : 'Java',
            task_number : 5,
            task_name : 'Code Optimization',
            task_level : 'Medium',
            task_category : 'Development'
        },
        {
            employee_number : 1005,
            employee_name : 'Raghavendran R',
            employee_email : 'ragav@infosys.com',
            employee_mobile : 7895784654,
            basic_skill : 'Front End',
            task_number : 78,
            task_name : 'Data Validation',
            task_level : 'Low',
            task_category : 'Enhancement'
        },
        {
            employee_number : 1006,
            employee_name : 'David Menon',
            employee_email : 'david@infosys.com',
            employee_mobile : 7895487654,
            basic_skill : 'Node JS',
            task_number : 76,
            task_name : 'Server Configuration',
            task_level : 'Medium',
            task_category : 'Production Support'
        },
        {
            employee_number : 1007,
            employee_name : 'Deepa Singh',
            employee_email : 'deepa@infosys.com',
            employee_mobile : 854782215,
            basic_skill : 'Java',
            task_number : 52,
            task_name : 'Data Evaluation Error',
            task_level : 'High',
            task_category : 'Bug Fixing'
        },
        {
            employee_number : 1008,
            employee_name : 'Ramanathan R',
            employee_email : 'ramanathan@infosys.com',
            employee_mobile : 989876546,
            basic_skill : 'Front End',
            task_number : 45,
            task_name : 'Profits Graphs',
            task_level : 'High',
            task_category : 'Development'
        }
    ];
    this.categories = [
        {
            category_number : 100,
            category_name : 'Development'
        },
        {
            category_number : 101,
            category_name : 'Maintenance'
        },
        {
            category_number : 102,
            category_name : 'Bug Fixing'
        },
        {
            category_number : 103,
            category_name : 'TroubleShooting'
        },
        {
            category_number : 104,
            category_name : 'Production Support'
        },
        {
            category_number : 105,
            category_name : 'Enhancement'
        }
    ];
    this.leadingZero = function(number) {
        if(number <= 9){
            return '0' + number;
        }
        else{
            return number;
        }
    };
    this.addCategory = function() {
        var newCategory = {
            category_number : this.categories[this.categories.length-1].category_number + 1,
            category_name : this.category_name
        };
        this.categories.push(newCategory);
    };
});