To compile the code, run tsc 

To run the code, node build/index.js


From the task can be accomplised in three stages. The first step
is to determine the cost of parking each car. The second to 
allocate the cars between each employee and a third to
output the generated results.

Each one of these steps will encapsulated in its own class 
(PriceCalculator, JobSorter and Summary, respectively). These 
have static methods for different strategies tht need to be
added in as arguments to the CarPark class. This was done
to enable modularity of each of these steps and allows the user
to easily add differnent strategys. It also allows the user to 
know what other strategies are available (if available)

These assumptions were made to complete the task. 

-The workload of parking a car is the same regardless if the 
employee has to refuel the car or not.

-Maximising profit means maximising the profit for the parking
service system. 

-Profits are determined by subtracting the commission paid to
the employee from the total price of parking the car. Eg,
if the price was $100, and the employee's commission is 11%,
the profit would be $89.

-The "capacity" of each car is in litres

-The "level" of each car is the cars current fuel level as a 
percentage. Eg, 0.07 means the car has 7% fuel of its max
capacity left.

-All the cars that need to get parked are known in advance,
They do not come in one at a time, and get allocated to each
employee in their order in the array.

