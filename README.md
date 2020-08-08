# JS211-Dodgeball
Project Scope:
20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit test that prove a person becomes a player and player becomes a teammate.

Code Plan:


1.  Make a class for a player that can use the information from the arrayOfPeople.
2.  Make an input form on the Dom that asks the necassary questions to input the registration information when moving a player from the arrayofPeople to the new player class.
3.  Create an area to show all registered player, with a button that allows them to pick the team they are to be placed on.
4.  When the button for "pick a team" is clicked, have a form that allows them to pick the team they want.  when the team is picked assign them to either the red team array or blue team.  Also give them keys with team name and mascot at this time in their array.
5.  Create a button for each player in three registered player areas (Resitstered Players, Red Team, or Blue team) that when pushed shows all the players related info.
6.  Create a button in the "List of Peoples area" that ties to a form to allow new people to be entered in the system.
7.  Make players that are not healthy show up in red.
8.  Add mascot and team colors displayed in the list area for the team.
9.  Use grid layout to create two columns of data on the DOM.  Have List of people, blue team, and red team in one column.  Have registered player and player info int he other column.
