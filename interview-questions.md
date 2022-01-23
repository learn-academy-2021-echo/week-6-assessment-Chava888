# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
A foreign key will be created in the Student Model since the association is one to many from Cohort to Students. The foreign key can be added by adding a column to the student model. The name of the column added would have the name of students_id.

Researched answer:
A rails generate migration add_column_to_students should be called in the terminal to add a column to the Student Model. The column added should have the name of cohort_id.

2. Which RESTful routes must always be passed params? Why?

Your answer:
The new, create, edit, update, and delete take in params for RESTful routes. They take params because data is been created or modified in some way. For example, new (GET) and create (POST) is used to create a new instance. Edit (GET) and update (PATCH) are to modify a instance, while delete (DELETE) is to remove a specific instace object.

//Note to Self - Repasa, esto has to be on point. //

Researched answer:
The show, create, edit, update, and delete require params for RESTful routes. The show is showing a specific object, therefore an id is require to identify. The create is making a new object and requires the params to populate a new entry in a table. The edit, update, and delete are identifying a specific object so params are required to update or delete a specific entry in a table.

3. Name three rails generator commands. What is created by each?

Your answer:
Three rail generators are model, controller,and resource. The model creates a Table, controller creates a rb file were we store the methods for our various RESTful routes, and resource creates all the RESTful routes automatically for the rails app.

Researched answer:
The three generators are model, controller and resource. The model creates a table that later the user calls db:migrate to create a schema of the table in rails. The controller creates a rail controller where methods are store for the RESTful routes. The resource generates a model, controller, spec files, and RESTful routes automatically for the rails app.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students
The method is index, it will display all the students.

action: "POST" route: /students
The method is create, it will generate a new instance entry in the Student table.

action: "GET" route: /students/new
The method is new, it will display a empty form that a user must populate, which once submitted a POST will follow.

action: "GET" route: /students/2
The method is show, it will display the information for student with an id of 2.

action: "GET" route: /students/2/edit
The method is edit, it will display a populated form for student 2. A user can modify the information and then submit the form, which follows a PATCH.

action: "PATCH" route: /students/2
The method is update, it will modify the information contain in student 2 based on the edit form.

action: "DELETE" route: /students/2
The method is destroy, it will delete the instance entry for student with an id of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

--1. A user can view all todo list.
--2. A user can click on a task from todo list and show the details of the task.
--3. A user can create a new task (name, task details) and will be shown in the todo list.
--4. A user can modify a specific task details and update the task.
--5. A user can delete a task that has been completed.
--6. As a user, it can view the due date for a specific task.
--7. As a user, it can view a list of tasks that are due in the next 10 days.
--8. As a user, it can view the number of days left before a task is due.
--9. As a developer, validate that user has inputed a task name, details of task, and due date when creating a new task.
--10. As a developer, validate that task name and details are a string and due date is a date type.
