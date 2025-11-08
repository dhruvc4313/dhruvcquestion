const categories = {
    "BASIC INPUT OUTPUT": [
        {
            id: "b1",
            question: "Write a program to print the message: Today I made my first C Program.",

            answer: ` 
#include <stdio.h>
#include <conio.h>

void main()
{
    clrscr();   
    printf("Today I made my first C Program.");
    getch(); }`

        },
        {
            id: "b2",
            question: "Write a program to read a character from the keyboard and display it on the screen.",

            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    char ch;   
    clrscr();  

    printf("Enter a character: ");
    scanf("%c", &ch);   

    printf("You entered: %c", ch);   

    getch();   
}`
        },
        {
            id: "b3",
            question: "Write a program to read only 4 characters from the keyboard and display it on the screen in a separate line.",
            answer: `
       #include <stdio.h>
#include <conio.h>
void main(){
char a, b, c,d;
clrscr();
printf("Read only 4character\n");
printf("Enter the data");
scanf("%c %c %c %c",&a,&b,&c,&d);

printf("your data is %c\n %c\n %c\n %c",a,b,c,d);
} `
        },
        {
            id: "b4",
            question: "Write a program to print your name at center of the first line?",
            answer: `
   #include <stdio.h>
#include <conio.h>
void main(){
clrscr();
printf("it print the name in center of first line\n");
printf("\t \t \t \t\t Dhruv");  //depends on the screen size of PCS
}
 `
        },
        {
            id: "b5",
            question: "Write a program to store single quote and print that variable to show single quote on output screen.",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
char single='\'';
clrscr();
printf("%c",single);
}
`
        },
        {
            id: "b6",
            question: "Write a program for printing your name on output screen but your name should blink 5 times",
            answer: `
    #include <stdio.h>
#include <conio.h>
#include <dos.h>
void main(){
clrscr();
printf("your name will blink 5 times\n");
printf("Dhruv");
delay(100);
clrscr();
delay(100);
printf("Dhruv");
delay(100);
clrscr();
delay(100);
printf("Dhruv");
delay(100);
clrscr();
delay(100);
printf("Dhruv");
delay(100);
clrscr();
delay(100);
printf("Dhruv");
delay(100);
clrscr();
delay(100);
}
`
        },
        {
            id: "b7",
            question: "Write the program to display this output ? #include<stdio.h> #include<conio.h> #include<dos.h> void main () { clrscr(); printf(“hello,welcome to c”); delay(5000); }",
            answer: `hello,welcome to c
    `
        },

        {
            id: "b8",
            question: "Write a program to print your name at the center of the page ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int i;

    clrscr();   


    for(i = 0; i < 10; i++)
        printf("\n");


    for(i = 0; i < 35; i++)
        printf(" ");

    printf("Dhruv Goyal");   

    getch(); 
} `
        },
        {
            id: "b9",
            question: "Enter password display like ****** ?",
            answer: `
   #include<stdio.h>
#include<conio.h>
void main(){
char a,b,c,d,e,f;
clrscr();
printf("pasword will be printed like ******:");
scanf("%c",&a);
scanf("%c",&b);
scanf("%c",&c);
scanf("%c",&d);
scanf("%c",&e);
scanf("%c",&f);
printf("output is ******");
} `
        },
        {
            id: "b10",
            question: "Enter two character from user and print ASCII value ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
void main(){
char x,y;
clrscr();
printf("Enter two character to print their ascii value:");
printf("\n Enter the first character");
scanf("%c",&x);
fflush(stdin);
printf("\n Enter the Second character");
scanf("%c",&y);
fflush(stdin);
printf("the ascii values are %d %d",x,y);
}`
        },
        {
            id: "b11",
            question: "Print all ASCII character 0 to 127 ?",
            answer: `
   #include <stdio.h>
#include <conio.h>
void main(){
int i;
clrscr();
printf("prints character to ascii value 0 to 127\n");
for(i=0;i<=127;i++)
{
printf("%c ",i);
}} `
        }],

    "Decision Control Statement": [
        {
            id: "d1",
            question: " Write a program to enter the number from the user and check it is positive or negative or 0 (zero) ?",
            answer: `
        #include <stdio.h>
#include <conio.h>
void main(){
int x;
clrscr();
printf("enter the number to check");
scanf("%d",&x);
if(x>0)
printf("\n Number is positive");
else if(x<0)
printf("\n Number is negative");
else
printf("\n Number is zero");
}`
        },
        {
            id: "d2",
            question: "Enter a number from user and check it is odd or even ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
int x;
clrscr();
printf("checks the number is odd or even");
scanf("%d",&x);
if (x%2==0&&x>=0)
printf("number is even");
else if(x%2!=0&&x>=0)
printf("number is odd");
else
printf("number is negative");
}`
        },
        {
            id: "d3",
            question: "Enter a number from the user and check that it is of 1 digit or 2 digit or 3 digit or 4 digit or 5 digit ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
long int x;
clrscr();
printf("check the number of digits");
scanf("%d",&x);
if(x>-32768&&x<32767){
if(x<10)
printf("\n number is 1digit");
else if(x<100)
printf("\n number is 2digit");
else if(x<1000)
printf("\n number is 3digit");
else if(x<10000)
printf("\n number is 4digit");
else if(x<32768)
printf("\n number is 5digit");
}
printf("out of range");
}`
        },
        {
            id: "d4",
            question: "Enter a number from the user if the number is between 0 to 40 then we will print fail if the number is between 40 to 60 then we will print C grade ,if the number is between 60 to 80 than we will print B grade ,if the number is between 80 to 100 then we will print A grade and rest all number are invalid ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
void main()
{
int x;
clrscr();
printf("grades the student on the basic of number");
scanf("%d",&x);
if(x>=0&&x<40)
printf("\nfail");
else if(x>=40&&x<60)
printf("\n grade is C");
else if(x>=60&&x<80)
printf("\n grade is B");
else if(x>=80&&x<100)
printf("\n grade is A");
else

printf("invalid marking");
}`
        },
        {
            id: "d5",
            question: " Enter a number from the user and check it is a decimal number or not ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
float x,d;
int y;
clrscr();
printf("checks the decimals place");
scanf("%f",&x);
d=x-(int)x;
printf("%f",d);
if(x==(int)x)
printf("not decimal");
else
printf("decimal");
}`
        },
        {
            id: "d7",
            question: "Enter a number from the user if it is a negative then convert into positive and if it is positive then convert into negative often that print the number ?",
            answer: `
   #include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    clrscr();  

    printf("Enter a number: ");
    scanf("%d", &num);

    if(num < 0)
    {
        num = -num;   
    }
    else if(num > 0)
    {
        num = -num;       }
   else
	printf("number is zero");

    printf("Converted number is: %d", num);

    getch(); 
}
 `},
        {
            id: "d8",
            question: "Enter a character from the user and check that it is an alphabet ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    char ch;
    clrscr();  

    printf("Enter a character: ");
    scanf("%c", &ch);

    if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
    {
        printf("The character '%c' is an alphabet.", ch);
    }
    else
    {
        printf("The character '%c' is NOT an alphabet.", ch);
    }

    getch();  
}
` },
        {
            id: "d9",
            question: "Enter a number from the user if the number is negative then square the number and if it is positive then increment the number 20 times ?",
            answer: `#include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    clrscr(); 
    printf("Enter a number: ");
    scanf("%d", &num);

    if(num < 0)
    {
        printf("Result is: %d", num * num);   
    }
    else if(num > 0)
    {
        printf("the number is increased by 20 %d", num+20);
    }

    

    getch();  
}`
        },
        {
            id: "d9",
            question: " Enter the number from the user it the number is negative or positive and find out of that number ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    clrscr();   

    printf("Enter a number: ");
    scanf("%d", &num);

    if(num > 0)
    {
        printf("The number %d is positive", num);
    }
    else if(num < 0)
    {
        printf("The number %d is negative", num);
    }
    else
    {
        printf("The number is zero");
    }

    getch();  
}
`
        },
        {
            id: "d10",
            question: "Enter two number from user and check which is the greater number and print the greater number ?",
            answer: `#include <stdio.h>
#include <conio.h>

void main()
{
    int num1, num2;
    clrscr();

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    if(num1 > num2)
    {
        printf("%d is greater", num1);
    }
    else if(num2 > num1)
    {
        printf("%d is greater", num2);
    }
    else
    {
        printf("Both numbers are equal");
    }

    getch();  
}
`
        },
        {
            id: "d11",
            question: " Enter a number from user and check it is divisible by 4 or not ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    clrscr();  
    printf("Enter a number: ");
    scanf("%d", &num);

    if(num % 4 == 0)
    {
        printf("is divisible by 4");
    }
    else
    {
        printf(" NOT divisible by 4");
    }

    getch(); 
}
`
        },
        {
            id: "d12",
            question: "Enter a four characters from users and check they are equal or not ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    char a, b, c, d;
    clrscr();  

    printf("Enter four characters:\n");
    scanf("%c %c %c %c", &a, &b, &c, &d);

    if(a == b && b == c && c == d)
    {
        printf("All four characters are equal.");
    }
    else
    {
        printf("All four characters are NOT equal.");
    }

    getch();  
}
`
        },
        {
            id: "d12",
            question: " Enter three numbers from users and tell which is greater ?",
            answer: `#include <stdio.h>
#include <conio.h>

void main()
{
    int x,y,z,k;
    clrscr();
    printf("compares three numbers");
    printf("\n Enter the number 1");
    scanf("%d",&x);
    printf("\n Enter the number 2");
    scanf("%d",&y);
    printf("\n Enter the nmuber 3");
    scanf("%d",&z);
    k=x>y?x:y;
    k=k>z?k:z;
    printf("the greater is %d",k);
    getch();
}
`
        },
        {
            id: "d13",
            question: "Enter a number from the user if the user enters 30 then print the month in which we have 30 days. If the enter 31 then print the month 31 days for 28, 29 print the month else everything is invalid ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int days;
    clrscr();  
    printf("Enter number of days (28, 29, 30, 31): ");
    scanf("%d", &days);

    if(days == 31)
    {
        printf("Months with 31 days are:\n");
        printf("January, March, May, July, August, October, December");
    }
    else if(days == 30)
    {
        printf("Months with 30 days are:\n");
        printf("April, June, September, November");
    }
    else if(days == 28 || days == 29)
    {
        printf("Month with 28 or 29 days is:\n");
        printf("February");
    }
    else
    {
        printf("go back to school");
    }

    getch(); 
}`
        },
        {
            id: "d14",
            question: " Enter one digit number from user and print in words ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int num;
    clrscr();   

    printf("Enter a one-digit number (0-9): ");
    scanf("%d", &num);

    switch(num)
    {
        case 0:
            printf("Zero");
            break;
        case 1:
            printf("One");
            break;
        case 2:
            printf("Two");
            break;
        case 3:
            printf("Three");
            break;
        case 4:
            printf("Four");
            break;
        case 5:
            printf("Five");
            break;
        case 6:
            printf("Six");
            break;
        case 7:
            printf("Seven");
            break;
        case 8:
            printf("Eight");
            break;
        case 9:
            printf("Nine");
            break;
        default:
            printf("Invalid input! Please enter a number between 0 and 9.");
    }

    getch();   
}`
        },
        {
            id: "d15",
            question: " Enter two characters from user and check both are same or not, if not same then find out difference between them ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
char x,y;
clrscr();
printf("compares two character\n");
printf("\nEnter the first character");
scanf("%c",&x);
fflush(stdin);
printf("\nEnter the second character");
scanf("%c",&y);
if(x==y)
printf("both are same");
else
printf("difference is %d", x-y );
}`
        },
        {
            id: "d16",
            question: "Enter two digit number from user and print it in word (like 50 will be five zero) ?",
            answer: `
    #include <stdio.h>
#include <conio.h>

void main()
{
    int num, tens, ones;
    clrscr();   
    printf("Enter a two-digit number (10-99): ");
    scanf("%d", &num);

    if(num >=10 && num <100)
    {
        tens = num / 10;   
        ones = num % 10;   


        switch(tens)
        {
            case 0: printf("Zero "); break;
            case 1: printf("One "); break;
            case 2: printf("Two "); break;
            case 3: printf("Three "); break;
            case 4: printf("Four "); break;
            case 5: printf("Five "); break;
            case 6: printf("Six "); break;
            case 7: printf("Seven "); break;
            case 8: printf("Eight "); break;
            case 9: printf("Nine "); break;
        }


        switch(ones)
        {
            case 0: printf(" Zero"); break;
            case 1: printf(" One"); break;
            case 2: printf(" Two"); break;
            case 3: printf(" Three"); break;
            case 4: printf(" Four"); break;
            case 5: printf(" Five"); break;
            case 6: printf(" Six"); break;
            case 7: printf(" Seven"); break;
            case 8: printf(" Eight"); break;
            case 9: printf(" Nine"); break;
        }
    }
else
printf("invlaid input");


    getch();   
}`
        },
        {
            id: "d17",
            question: "Enter a character from user and it is in upper case, lower case, special characters or numbers ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main()
{
char x;
clrscr();
printf("Checks the type of character\n");
printf("\nEnter the character");
scanf("%c",&x);
if(x>='A'&&x<='Z')
printf("UPPER CASE");
else if(x>='a'&&x<='z')
printf("LOWER CASE");
else if(x>='0' &&x<='9')
printf("NUMBERS");
else
printf("SPECIAL CHARACTERS");
getch();
}`
        },
        {
            id: "d18",
            question: "nter the year from user and check its leap year or not ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main()
{
int num;
clrscr();
printf("Enter the number to check whether it is leap or not\n");
scanf("%d",&num);
if(num%4==0&&num%100!=0||num%400==0)
printf("yeap Year");
else
printf("not an leap year");
getch();
}`
        },
        {
            id: "d19",
            question: "Enter date, month, year and check it is valid date or not ?",
            answer: `
    void main()
{
int d,m,y;
clrscr();
printf("Check the valid year");
printf("\nenter the date");
scanf("%d",&d);
printf("\nenter the month");
scanf("%d",&m);
printf("\nenter the year");
scanf("%d",&y);
if(d>0&&d<32&&m>0&&m<13&&y<2026)
printf("data is valid %0.2d/%0.2d/%0.4d",d,m,y);
else
printf("invalid date");
}
`
        },
        {
            id: "d20",
            question: "Enter current date of DOB of user and find out difference ?",
            answer: `#include <stdio.h>
#include <conio.h>

void main()
{
    int d1, m1, y1;   
    int d2, m2, y2;   
    int d, m, y;     
    int days;        

    clrscr();

    printf("Enter your Date of Birth (dd mm yyyy): ");
    scanf("%d %d %d", &d1, &m1, &y1);

    printf("Enter Current Date (dd mm yyyy): ");
    scanf("%d %d %d", &d2, &m2, &y2);

   
    if(m2 == 1 || m2 == 2 || m2 == 4 || m2 == 6 || m2 == 8 || m2 == 9 || m2 == 11)
        days = 31;
    else if(m2 == 5 || m2 == 7 || m2 == 10 || m2 == 12)
        days = 30;
    else
	days = 28;


    if(d2 < d1)
    {
	d2 = d2 + days;
	m2 = m2 - 1;
    }


    if(m2 < m1)
    {
	m2 = m2 + 12;
	y2 = y2 - 1;
    }

    d = d2 - d1;
    m = m2 - m1;
    y = y2 - y1;

    printf("\nYour Age Difference is: %d Years %d Months %d Days", y, m, d);

    getch();
}
`
        },
        {
            id: "d21",
            question: "Write a program to calculate area and perimeter of rectangle ?",
            answer: `
    #include <stdio.h>
#include <conio.h>
void main(){
float l,b,area,per;
clrscr();
printf("Enter the lenght of rectangle");
scanf("%f",&l);
printf("\nEnter the breadht of rectangle");
scanf("%f",&b);
area= l*b;
per=2*(l+b);
printf("the perimeter is %f\n the area is%f",per,area);
getch();
}`
        }
    ],

    "FILE HANDLING": [],
    "FUNCTIONS": [
        {
            id: "f1",
            question: "Write a program to enter 2 number from the users add them and display the answer, again enter 2 number from the user subtract them and display the answer, again enter 2 number from the user add them and display the answer, again enter 2 number from the user multiply them and display the answer, again enter 2 number from the user subtract them and display the answer, again enter 2 number from the user multiply them and display the answer, again enter 2 number from the user divide them and display the answer, again enter 2 number from the user divide them and display the answer, again enter 2 number from the user add them and display the answer ?",
            answer: `
       #include<stdio.h>
#include<conio.h>

		int input(){
		int x;
		printf("Enter the number");
		scanf("%d",&x);
		return x;}

			void add(){
			int x,y,z;
			x=input();
			y=input();
			z=x+y;
			output(z);}

				void output(r){
				printf("%d",r);}

			void sub(){
			int x,y,z;
			x=input();
			y=input();
			z=x-y;
			output(z);}

			void mul(){
			int x,y,z;
			x=input();
			y=input();
			z=x*y;
			output(z);}

			void div(){
			float x,y,z;
			x=input();
			y=input();
			z= x/y;
			printf("%f",z);}

				void pos(){
				int x, res;
				x = input();
				if (x>0&&x!=0)
				printf("the answer is %d",-x);
				else
				printf("\the answer is %d",x*x);}

				void greater(){
				int x,y;
				x=input();
				y=input();
				if(x>y)
				printf("%d",x);
				else
				printf("%d",y);}

				void last(){
				int x;
				x = input();
				printf("The last digit is %d",x%10);
				}

				void great(){
				int x,y,z,k;
				x=input();
				y=input();
				printf("\nEnter the 3rd number");
				scanf("%d",&z);
				if (x>y&&x>z)
				output(x);
				else if(y>x&&y>z)
				output(y);
				else
				output(z);}


void main(){
clrscr();
printf("\nAddition\n");
add();
printf("\nsubtraction\n");
sub();
printf("\nmultiplication\n");
mul();
printf("\nAddition\n");
add();
printf("\ndivision\n");
div();
printf("\nsubtraction\n");
sub();
printf("\n -ve printf +ve to sq \n");
pos();
printf("\n division \n");
div();
printf("\nGreater number\n");
greater();
printf("\nlast digit\n");
last();
printf("\ngreat\n");
great();
}`
        },
        {
            id: "f2",
            question: " Write a program to enter 10 number from the user add the number and display the answer ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
int num(){
int x;
scanf("%d",&x);
return x;
}

void main(){
int i,nums[10];
clrscr();
for(i=0;i<=9;i++){
printf("Enter the number %d: ",i+1);
nums[i]=num();
}
for(i=0;i<=8;i++){
nums[i+1]=nums[i+1]+nums[i];
}
printf("\nThe total for your 10 numbers are: %d",nums[9]);
getch();
}`
        },
        {
            id: "f3",
            question: " Write a program to return an array from function ?",
            answer: `
        #include <stdio.h>
#include<conio.h>

char fun(int i){
char array[10];
int x;
for(x=0;x<=9;x++){
array[x]=x+1;
}
return array[i];
}

void main(){
int i;
char array[10];
clrscr();
for(i=0;i<=9;i++){
array[i]=fun(i); }
for(i=0;i<=9;i++){
printf("Number %d: %d\n",i+1,array[i]);
}
getch();
}
`
        },
        {
            id: "f4",
            question: "Making following program using local and global variable ? Factorial , Reverse , Palindrome , Prime numbers, Armstrong , Fibonacci",
            answer: `
       #include<stdio.h>
#include<conio.h>
#include<string.h>
//declaring global functions
int i,f,j,l,x,y,d1,d2,d3,d4;
char str[25],str1[25],str2[25];

//declaring all the global funcions
void gfact();
void greverse();
void gpallindrome();
void gfibbo();
void gprime();
void garm();

//declaring all the local funcions
void lfact();
void lreverse();
void lpallindrome();
void lfibbo();
void lprime();
void larm();

//making main to control all
void main(){
int a,b;
char r;
ragain:
clrscr();
printf("1. Global Variable\n2. Local variable");
printf("\nSelect which variable would you like us to use:");
aagain:
scanf("%d",&a);
if(a!=1 && a!=2){printf("option Invalid\n");
printf("select the option again: ");
goto aagain;}
printf("1.Factorial\n");
printf("2.Reverse\n");
printf("3.Pallindrome\n");
printf("4.Prime Numbers\n");
printf("5.Fibbonacci series\n");
printf("6. Armstrong number\n");
printf("\nSelect which program do you want to execute:\n");
bagain:
scanf("%d",&b);
if(b<1 || b>6){printf("option Invalid\n");
printf("select the option again: ");
goto bagain;}
printf("Here is your programm: \n");
if(a==1){
if(b==1)gfact();
else if(b==2)greverse();
else if(b==3)gpallindrome();
else if(b==4)gprime();
else if(b==5)gfibbo();
else garm();
}
else{
if(b==1)lfact();
else if(b==2)lreverse();
else if(b==3)lpallindrome();
else if(b==4)lprime();
else if(b==5)lfibbo();
else larm();
}
getch();
}

//programs using global variables
//factorial
void gfact(){
clrscr();
printf("Enter the number: ");
scanf("%d",&x);
f=x;
for(i=x-1;i>0;i--){
f=f*i;
}
printf("Factorial of this number: %d",f);
getch();
}

//reverse
void greverse(){
clrscr();
printf("Enter the word: ");
gets(str);
l=strlen(str);
for(i=0;i<l;i++){
printf("%c",str[l-i-1]);
}
getch();
}

//pallindrome
void gpallindrome(){
clrscr();
printf("Enter the word: ");
fflush(stdin);
gets(str1);
l=strlen(str1);
for(i=0;i<l;i++){
str2[i]=str1[l-1-i];
}
str2[i]=0;
l=strcmp(str1,str2);
if(l==0) printf("\nThis is a Pallindrome");
else printf("\nThis is not a pallindrome");
getch();
}

//prime numbers
void gprime(){
clrscr();
printf("Enter the number you like: ");
scanf("%d",&x);
for(i=2;i<x;i++){
if(x%i==0){
printf("%d is not a prime number",x);
goto end;
}
}
printf("%d is a prime number",x);
end:
getch();
}

void gfibbo(){
clrscr();
x=0;
y=1;
printf("How many number you want in this series: ");
scanf("%d",&j);
printf("%d %d ",x,y);
for(i=0;i<=j-3;i++){
y=x+y;
printf("%d ",y);
x=y-x;
}
getch();
}

void garm()
{
int x,d1,d2,d3,d4;
clrscr();
printf("Enter a number you like: ");
scanf("%d",&x);
if(x<0)x=x*-1;
if(x==0)printf("%d is an armstrong number.",x);
else if(x<100 || x>9999)printf("The next armstrong number after 0 strats from the 3 digits or more\nPLease enter a 3 or 4 digit number only");
else{
	if(x<1000){//checking if 3 digit number
	d1=x/100;      //1st digit
	d2=(x%100)/10; //2nd digit
	d3=x%10;       //3rd digit
		if(((d1*d1*d1)+(d2*d2*d2)+(d3*d3*d3))==x)
		printf("%d is an armstrong number",x);
		else
		printf("%d is not an armstrong number",x);
		}
	else{//for 4 digit number
	d1=x/1000;         //1st digit
	d2=(x%1000)/100;   //2nd digit
	d3=(x%100)/10;     //3rd digit
	d4=x%10;           //4th digit
		if(((d1*d1*d1*d1)+(d2*d2*d2*d2)+(d3*d3*d3*d3)+(d4*d4*d4*d4))==x)
		printf("%d is an armstrong number",x);
		else
		printf("%d is not an armstrong number",x);
		}
	}
getch();
}

//programs using local variables
//factorial
void lfact(){
int x,f,i;
clrscr();
printf("Enter the number: ");
scanf("%d",&x);
f=x;
for(i=x-1;i>0;i--){
f=f*i;
}
printf("Factorial of this number: %d",f);
getch();
}

//reverse
void lreverse(){
char str[25];
int i,l;
clrscr();
printf("Enter the word: ");
gets(str);
l=strlen(str);
for(i=0;i<l;i++){
printf("%c",str[l-i-1]);
}
getch();
}

//pallindrome
void lpallindrome(){
char str1[25],str2[25];
int i,l;
clrscr();
printf("Enter the word: ");
fflush(stdin);
gets(str1);
l=strlen(str1);
for(i=0;i<l;i++){
str2[i]=str1[l-1-i];
}
str2[i]=0;
l=strcmp(str1,str2);
if(l==0) printf("\nThis is a Pallindrome");
else printf("\nThis is not a pallindrome");
getch();
}

//prime numbers
void lprime(){
int x,i;
clrscr();
printf("Enter the number you like: ");
scanf("%d",&x);
for(i=2;i<x;i++){
if(x%i==0){
printf("%d is not a prime number",x);
goto end;
}
}
printf("%d is a prime number",x);
end:
getch();
}

void lfibbo(){
int i,x=0,y=1,j;
clrscr();
printf("How many number you want in this series: ");
scanf("%d",&j);
printf("%d %d ",x,y);
for(i=0;i<=j-3;i++){
y=x+y;
printf("%d ",y);
x=y-x;
}
getch();
}

void larm()
{
int x,d1,d2,d3,d4;
clrscr();
printf("Enter a number you like: ");
scanf("%d",&x);
if(x<0)x=x*-1;
if(x==0)printf("%d is an armstrong number.",x);
else if(x<100 || x>9999)printf("The next armstrong number after 0 strats from the 3 digits or more\nPLease enter a 3 or 4 digit number only");
else{
	if(x<1000){//checking if 3 digit number
	d1=x/100;      //1st digit
	d2=(x%100)/10; //2nd digit
	d3=x%10;       //3rd digit
		if(((d1*d1*d1)+(d2*d2*d2)+(d3*d3*d3))==x)
		printf("%d is an armstrong number",x);
		else
		printf("%d is not an armstrong number",x);
		}
	else{//for 4 digit number
	d1=x/1000;         //1st digit
	d2=(x%1000)/100;   //2nd digit
	d3=(x%100)/10;     //3rd digit
	d4=x%10;           //4th digit
		if(((d1*d1*d1*d1)+(d2*d2*d2*d2)+(d3*d3*d3*d3)+(d4*d4*d4*d4))==x)
		printf("%d is an armstrong number",x);
		else
		printf("%d is not an armstrong number",x);
		}
	}
getch();
}`
        },
        {
            id: "f5",
            question: "Swap numbers using Call by address ?",
            answer: `
        //Swap Numbers Using Call By Address

#include <stdio.h>
#include <conio.h>


void swap(int *x, int *y);

void main()
{
    int a, b;

    clrscr();   

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("\nBefore swapping: a = %d, b = %d", a, b);

    swap(&a, &b);  

    printf("\nAfter swapping:  a = %d, b = %d", a, b);

    getch();   
}

void swap(int *x, int *y)
{
    int temp;

    temp = *x;
    *x = *y;
    *y = temp;
}

`
        },
        {
            id: "f6",
            question: "Swap numbers using Call by function ?",
            answer: `
        //Swap Numbers By Call By Functions

#include <stdio.h>
#include <conio.h>


void swap(int x, int y);

void main()
{
    int a, b;

    clrscr();  

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("\nBefore swapping: a = %d, b = %d", a, b);

    swap(a, b);  

    printf("\nAfter swapping in main: a = %d, b = %d", a, b);

    getch();  
}

void swap(int x, int y)
{
    int temp;

    temp = x;
    x = y;
    y = temp;

    printf("\nAfter swapping in function: x = %d, y = %d", x, y);
}
`
        },
        {
            id: "f7",
            question: "Make function for find out power of number, enter the number and power from user ?",
            answer: `
        #include<stdio.h>
#include<conio.h>

int power(int,int);

void main(){
int n,p,x;
clrscr();
printf("Enter the Base Number: ");
scanf("%d",&n);
printf("Enter the Power of the Number: ");
scanf("%d",&p);
x=power(n,p);
printf("Here is the result of the number: %d",x);
getch();
}

int power(int n,int p){
int x=1,i;
for(i=0;i<p;i++){
x=x*n;
}
return x;
}`
        },
        {
            id: "f8",
            question: " Make function for find out Cube a user entered number ?",
            answer: `
       #include<stdio.h>
#include<conio.h>

int Cube(int);

void main(){
int n,x;
clrscr();
printf("Enter the Number: ");
scanf("%d",&n);
x=Cube(n);
printf("Here is the result of the number: %d",x);
getch();
}

int Cube(int n){
int x=1,i;
for(i=0;i<3;i++){
x=x*n;
}
return x;
} `
        }
    ],

    "ITERATIVE CONTROL STRUCTURE(NESTED)": [
        {
            id: "icsn",
            question: " Write a program print the pattern on the screen i.e. ? 11111 11111 11111",
            answer: `
       #include<stdio.h>
#include<conio.h>
#include<dos.h>
void main()
{
int i,j;
clrscr();
for(i=1;i<=3;i++)
{
//printf("1");
for(j=0;j<4;j++)
{
printf("1");
}
printf("\n") ;
}
}
 `
        }

    ],

    "MULTI DIMENSIONAL ARRAY": [
        {
            id: "mda1",
            question: "Enter the four number from user and print it into matrix",
            answer: `
            #include <stdio.h>
#include <conio.h>
void main(){
int i;
int a[2][2];
clrscr();
printf("Enter 4 number to display in matrix");
printf("\nEnter two number in first row");
for(i=0;i<2;i++)
scanf("%d",&a[0][i]);
printf("\nEnter two number in Second row");
for(i=0;i<2;i++)
scanf("%d",&a[1][i]);
for(i=0;i<2;i++)
printf("%d ",a[0][i]);
printf("\n");
for(i=0;i<2;i++)
printf("%d ",a[1][i]);
getch();
} `
        },

        {
            id: "mda2",
            question: "Enter the matrix from and transpose them ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main(){
int a[2][2], transpose[2][2];
int x,y;
clrscr();
printf("Enter element of 2*2 matrix\n");
for(x=0;x<2;x++){
	for(y=0;y<2;y++){
	scanf("%d",&a[x][y]);}
	}
for(x=0;x<2;x++){
	for(y=0;y<2;y++){
	transpose[y][x]=a[x][y]; }

}
printf("transpose of matrix are\n");
for(x=0;x<2;x++){
	for(y=0;y<2;y++){
	printf("%d\t",transpose[x][y]);}
	printf("\n");}
}
`
        },
        {
            id: "mda3",
            question: "Enter 2 matrix from user and add them ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main(){
int a[2][2];
int b[2][2];
int c[2][2];
int i,j;
clrscr();
printf("Adds two matrix\n");
printf("Enter data of first matrix\n");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&a[i][j]);}
	}
printf("Enter data of second matrix");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&b[i][j]);}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	c[i][j]=a[i][j]+b[i][j];}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	printf("%d\t",c[i][j]);}
	printf("\n");
	}
	getch();

	}

`
        },
        {
            id: "mda4",
            question: " Enter 2 matrix from user and subtract them ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main(){
int a[2][2];
int b[2][2];
int c[2][2];
int i,j;
clrscr();
printf("Substract two matrix\n");
printf("Enter data of first matrix\n");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&a[i][j]);}
	}
printf("Enter data of second matrix");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&b[i][j]);}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	c[i][j]=a[i][j]-b[i][j];}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	printf("%d\t",c[i][j]);}
	printf("\n");
	}
	getch();

	}`,

        },
        {
            id: "mda5",
            question: " Enter 2 matrix from user and multiply them ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main(){
int a[2][2];
int b[2][2];
int c[2][2];
int i,j;
clrscr();
printf("Adds two matrix\n");
printf("Enter data of first matrix\n");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&a[i][j]);}
	}
printf("Enter data of second matrix");
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	scanf("%d",&b[i][j]);}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	c[i][j]=a[i][j]*b[i][j];}
	}
for(i=0;i<2;i++){
	for(j=0;j<2;j++){
	printf("%d\t",c[i][j]);}
	printf("\n");
	}
	getch();

	}`
        }

    ],

    "OPERATORS": [
        {
            id: "op1",
            question: "Write a program to show that example of pre-increment ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int a=5;
int b;
clrscr();
b=++a;//pre-increment :first increases 'a',then assign it to 'b'
printf("value of a: %d\n",a);
printf("value of b: %d\n",b);
}`
        },

        {
            id: "op2",
            question: "Write a program to show that example of post-increment ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int a=10;
int b;
clrscr();
b=a++;
printf("value of a %d\n",a);//post-increment first assign 'a' to'b',then increases 'a' by 1
printf("value of b %d\n",b);
}`
        },

        {
            id: "op3",
            question: " Write a program to show that example of pre-decrement ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int a=10,b;
clrscr();
b=--a;
printf("value of a:%d\n",a);
printf("value of b:%d\n",b);
}`
        },

        {
            id: "op4",
            question: "Write a program to show that example of post-decrement ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int a=11;
int b;
clrscr();
b=a--;
printf("value of a:%d\n",a);
//post decrement first assign the value and then decrement means subtracting 1
printf("value of b:%d\n",b);
}`
        },

        {
            id: "op5",
            question: " Write a program to enter 2 numbers from user add the number and show the answer , again take 2 number from user subtract the number display the answer ,again take 2 number from user multiply the number display the answer and ,again take 2 number from the user divide the number display the answer ,again take 2 number find the remainder and display the answer ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int x,y;
clrscr();
printf("enter the first number");
scanf("%d",&x);
printf("enter the second number");
scanf("%d",&y);
printf("%d\n",x+y);

	printf("enter the first number");
	scanf("%d",&x);
	printf("enter the second number");
	scanf("%d",&y);
	printf("%d\n",x-y);

		printf("enter the  number");
		scanf("%d",&x);
		printf("enter the number");
		scanf("%d",&y);
		printf("%d/n",x*y);

			printf("enter the number");
			scanf("%d",&x);
			printf("enter the number");
			scanf("%d",&y);
			printf("%d\n",x/y);

				printf("enter the number");
				scanf("%d",&x);
				printf("enter the number");
				scanf("%d",&y);
				printf("%d\n",x%y);
				}`
        },

        {
            id: "op6",
            question: "Write a program to enter a number from the user ,the length of the number is depend on the user ,programmer should print the last digit of number ?",
            answer: `   
        #include<stdio.h>
#include<conio.h>
void main()
{
long num;
int x;
clrscr();
printf("enter any number");
scanf("%ld",&num);
x=num % 10;
printf("the last digit of the number is : %d\n",x);
}
`
        },

        {
            id: "op7",
            question: "Enter a decimal number from the user (float) and print the right hand side of the decimal point ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int x;
float y;
clrscr();
printf("enter the number: ");
scanf("%f",&y);
x=y;
y=y-x;
printf("the number is %f",y);
getch();
}`
        },

        {
            id: "op8",
            question: "nter a number from user and find out cube of numbers ?",
            answer: `
       #include<stdio.h>
#include<conio.h>
void main()
{
int x,cube;
clrscr();
printf("enter the number");
scanf("%d",&x);
cube=x*x*x;
printf("the cube of the number is:%d",cube);
} `
        },

        {
            id: "op9",
            question: " Enter float number from user and round of the number ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
float x,p;
int i,r;
clrscr();
printf("enter the number: ");
scanf("%f",&x);
i=x;
p=x-i;
if(p>0.5)r=i+1;
else r=i;
printf("Round off for your number is: %d",r);
getch();
}
`
        },

        {
            id: "op10",
            question: " Enter a lower case character from user and print it into upper case ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
char x;
clrscr();
printf("enter a lower case character");
scanf("%c",&x);
if(x>=97&&x<=122)
printf("changed character is %c",x-32);
else
printf("nothing");
}`
        },

        {
            id: "op11",
            question: "Enter marks of students and calculate average of student’s marks ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
void main()
{
int a,b,c,d,e,avg;
clrscr();
printf("enter the marks:");
scanf("%d",&a);
printf("\nenter the marks:");
scanf("%d",&b);
printf("\nenter the marks:");
scanf("%d",&c);
printf("\nenter the marks:");
scanf("%d",&d);
printf("\nenter the marks:");
scanf("%d",&e);
avg=a+b+c+d+e;
printf("the average of marks %d",avg/5);
}`
        },

        {
            id: "op12",
            question: "Calculate simple interest = (P x R x T)/ 100",
            answer: `#include<stdio.h>
#include<conio.h>
void main()
{
float p,r,t,interest;
clrscr();
printf("enter principle");
scanf("%f",&p);
printf("enter rate");
scanf("%f",&r);
printf("enter time");
scanf("%f",&t);
interest=(p*r*t)/100;
printf("%f",interest);
getch();
}
`
        }
    ],

    "POINTERS": [],
    "RECURSION": [],

    "SINGLE DIMENSION ARRAY": [
        {
            id: "sda1",
            question: "Enter an array from user and display all the value ?",
            answer: `
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char array[5];
int i;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.): ",i+1);
scanf("%c",&array[i]);
}
printf("Printing the array: ");
for(i=0;i<5;i++){
printf("%c ",array[i]);
}
getch();
}`
        },

        {
            id: "sda2",
            question: " Enter an array from user and print the array in reverse order ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char array[5];
int i;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.) value: ",i+1);
scanf("%c",&array[i]);
}
printf("Printing the array in reverse: ");
for(i=4;i>=0;i--){
printf("%c ",array[i]);
}
getch();
}`
        },

        {
            id: "sda3",
            question: "Enter an array from user and copy the array into second array ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char array1[5],array2[5];
int i;
clrscr();
printf("Enter the array1(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.): ",i+1);
scanf("%c",&array1[i]);
}
for(i=0;i<5;i++){
array2[i]=array1[i];
}
printf("Printing the copied array2: ");
for(i=0;i<5;i++){
printf("%c ",array2[i]);
}
getch();
}`
        },

        {
            id: "sda4",
            question: " Enter an array from user and copy it into another array in reverse order ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char array1[5],array2[5];
int i;
clrscr();
printf("Enter the array1(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.): ",i+1);
scanf("%c",&array1[i]);
}
for(i=0;i<5;i++){
array2[i]=array1[5-1-i];
}
printf("Printing the reverse copied array2: ");
for(i=0;i<5;i++){
printf("%c ",array2[i]);
}
getch();
}`
        },

        {
            id: "sda5",
            question: "Enter an array from user and print the number which is even ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5];
int i;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%c",&array[i]);
}
printf("Printing the even part of array: ");
for(i=0;i<5;i++){
if(array[i]%2==0)
printf("%c ",array[i]);
}
getch();
}`
        },

        {
            id: "sda6",
            question: " Enter an array from user and print the number which is positive ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5];
int i;
clrscr();
printf("Enter the array avlues(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
printf("Printing the positive part of array: ");
for(i=0;i<5;i++){
if(array[i]>0)
printf("%d ",array[i]);
}
getch();
}`
        },

        {
            id: "sda7",
            question: "Enter an array from user and square all the values of array ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5];
int i;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
for(i=0;i<5;i++){
array[i]=array[i]*array[i];
}
printf("Printing the modified array(every number is sqared): ");
for(i=0;i<5;i++){
printf("%d ",array[i]);
}
getch();
}`
        },

        {
            id: "sda8",
            question: "Enter 5 values of array from user and print odd number of array ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5];
int i;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
printf("Printing the even part of array: ");
for(i=0;i<5;i++){
if(array[i]%2!=0)
printf("%c ",array[i]);
}
getch();
}`
        },

        {
            id: "sda9",
            question: "Enter 5 values of array from user and add all values ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5],i,sum=0;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
for(i=0;i<5;i++){
sum=array[i]+sum;
}
printf("Sum of all the values: %d",sum);
getch();
}
`
        },

        {
            id: "sda10",
            question: " Enter 5 values of array from user, enter a value from user and search this value in array, if value is found then print “found” or not then print “not found”?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5],i,c;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
printf("Enter the value to search: ");
scanf("%d",&c);
for(i=0;i<5;i++){
if(array[i]==c){
printf("Found");
goto jump;
}
}
printf("not found");
jump:
getch();
}
`
        },
        {
            id: "sda11",
            question: "Enter five values of array and sort in ascending order ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5],i,j,temp;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
for(i=0;i<5;i++){
for(j=i+1;j<5;j++){
if(array[i]>array[j]){
temp=array[j];
array[j]=array[i];
array[i]=temp;}
}
}
printf("Printing the array in ascending order: \n");
for(i=0;i<5;i++){
printf("%d ",array[i]);
}
getch();
}
`
        },

        {
            id: "sda12",
            question: "Find maximum values of array ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5],i,check=0;
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
for(i=0;i<5;i++){
if(check<array[i])check=array[i];
}
printf("Maximum value of the array %d",check);
getch();
}
`
        },

        {
            id: "sda13",
            question: " Find minimum values of array ?",
            answer: `
    #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
int array[5],i,check=array[0];
clrscr();
printf("Enter the array(size limit: 5): \n");
for(i=0;i<5;i++){
fflush(stdin);
printf("%d.)Value: ",i+1);
scanf("%d",&array[i]);
}
for(i=0;i<5;i++){
if(check>array[i])check=array[i];
}
printf("Minimum value of the array %d",check);
getch();
}
`
        }
    ],

    "UNION": [],

    "STRUCTURES": [{
        id: "s1",
        question: "Create structure of employee which there is emp.ID, name, designation of 50 employees from user, print details in tabular form ?",

        answer: `
        

    #include <stdio.h>
#include <conio.h>

struct Employee {
    int id;
    char name[50];
    char designation[50];
};

void main() {
    struct Employee emp[50];
    int i, j;
    for(i=0; i<50; i++) {
        printf("Enter ID for employee %d: ", i+1);
        scanf("%d", &emp[i].id);
        getchar();
        printf("Enter name for employee %d: ", i+1);
        gets(emp[i].name);
        printf("Enter designation for employee %d: ", i+1);
        gets(emp[i].designation);
    }
    printf("\nID\tName Characters\n");
    for(i=0; i<50; i++) {
        printf("%d\t", emp[i].id);
        for(j=0; emp[i].name[j]!='\0'; j++)
            printf("%c ", emp[i].name[j]);
        printf("\n");
    };
}`},
    {
        question: " Create structure of employee which there is emp.ID, name, designation of 50 employees from user and print only name of the employee ?",
        answer: `
    
    #include <stdio.h>
#include <conio.h>

struct data
{
    int id;
    char name[25], des[30];
};
void main()
{
    int i, j;
    struct data emp[50];
    clrscr();
    printf("Enter the data for the employees below: \n");
    for (i = 0; i < 50; i++)
    {
        printf("Employee %d\n", i + 1);
        printf("Name: ");
        gets(emp[i].name);
        printf("Enter the Employee ID: ");
        scanf("%d", &emp[i].id);
        fflush(stdin);
        printf("Enter the designation: ");
        gets(emp[i].des);
    }
    printf("Employee Names: \n\n");
    printf("Employee number | Name\n");
    for (i = 0; i < 50; i++)
    {
        printf("%-16d| %s\n", i + 1, emp[i].name);
    }
    getch();
}`
    }, {
        question: "Create structure of employee which there is emp.ID, name, designation of 50 employees from user and print name character with emp.ID in tabular form ?",

        answer: `
    #include <stdio.h>
#include <conio.h>

struct data
{
    int id;
    char name[25], des[30];
};
void main()
{
    int i, j;
    struct data emp[50];
    clrscr();
    printf("Enter the data for the employees below: \n");
    for (i = 0; i < 50; i++)
    {
        printf("Employee %d\n", i + 1);
        printf("Name: ");
        gets(emp[i].name);
        printf("Enter the Employee ID: ");
        scanf("%d", &emp[i].id);
        fflush(stdin);
        printf("Enter the designation: ");
        gets(emp[i].des);
    }
    printf("--------------------------------------------------------------------------------");
    printf("| %-10s | %-30s |", "ID", "Name");//it means 10 space alloted and left aligned
    for (i = 0; i < 50; i++)
    {
        printf("--------------------------------------------------------------------------------");
        printf("| %-10d | %-30s |", emp[i].id, emp[i].name);
    }
    getch();
}`
    },

    {
        question: "Enter student details like roll name, fee, DOB and print all the detail by ascending order of roll number ?",
        answer: `
    #include <stdio.h>
#include <conio.h>

struct data
{
    int roll, fee;
    char dob[10];
};
void main()
{
    int i, j;
    struct data s[3], t;
    clrscr();
    printf("Enter the data for the students below: \n");
    for (i = 0; i < 3; i++)
    {
        printf("student %d\n", i + 1);
        printf("Roll Number: ");
        scanf("%d", &s[i].roll);
        fflush(stdin);
        printf("Semester fee(INR): ");
        scanf("%d", &s[i].fee);
        fflush(stdin);
        printf("Enter the Date of Birth(dd/mm/yyyy): ");
        gets(s[i].dob);
    }
    // arranging in the ascending order
    for (i = 0; i < 3; i++)
    {
        for (j = i + 1; j < 3; j++)
        {
            if (s[i].roll > s[j].roll)
            {
                t = s[i];
                s[i] = s[j];
                s[j] = t;
            }
        }
    }

    printf("--------------------------------------------------------------------------------");
    printf("| %-15s | %-25s | %-30s |", "Roll", "Semester Fee", "Date of Birth");
    for (i = 0; i < 3; i++)
    {
        printf("--------------------------------------------------------------------------------");
        printf("| %-15d | %-25d | %-30s |", s[i].roll, s[i].fee, s[i].dob);
    }
    getch();
}`
    }
    ],

    "STRING": [
        {
            id: "s1",
            question: " Enter a string from user and convert in uppercase ?",
            answer: `
        #include<stdio.h>
#include<string.h>
#include<conio.h>

void main(){
char str[50];
int i;
clrscr();
printf("Enter any sentence you like: ");
gets(str);
for(i=0;str[i];i++){
if(str[i]>='a'&& str[i]<='z'){
str[i]=str[i]-32;
}
}
printf(" the uppercase: %s",str);
getch();
}`
        },

        {
            id: "s2",
            question: "Enter a string from user and convert into lowercase ?",
            answer: `
        #include<stdio.h>
#include<string.h>
#include<conio.h>

void main(){
char str[50];
int i;
clrscr();
printf("Enter any sentence you like: ");
gets(str);
for(i=0;str[i];i++){
if(str[i]>='A'&& str[i]<='Z'){
str[i]=str[i]+32;
}
}
printf("Here is the lowercase version of it: %s",str);
getch();
}`
        },

        {
            id: "s3",
            question: " Enter a string from user and convert into sentence case ?",
            answer: `
        #include<stdio.h>
#include<string.h>
#include<conio.h>

void main(){
char str[50];
int i;
clrscr();
printf("Enter any sentence you like: ");
gets(str);
if(str[0]>='a' && str[0]<='z')str[0]=str[0]-32;
for(i=0;str[i];i++){
if(str[i-1]=='.' && str[i]>='a'&& str[i]<='z'){
str[i]=str[i]-32;
}
}
printf("Here is the sentence version of it: %s",str);
getch();
}
        `
        },

        {
            id: "s4",
            question: "Enter a string from user and convert into title case ?",
            answer: `
        #include<stdio.h>
#include<conio.h>

void main(){
char str[50];
int i;
clrscr();
printf("Enter any sentence you like: ");
gets(str);
if(str[0]>='a' && str[0]<='z')str[0]=str[0]-32;
for(i=0;str[i];i++){
if( (str[i-1]==' ' && str[i]>='a'&& str[i]<='z')  || (str[i-1]=='.' && str[i]>='a'&& str[i]<='z')){
str[i]=str[i]-32;
}
}
printf("Here is the uppercase version of it: %s",str);
getch();
}`

        },
        {
            id: "s5",
            question: "Enter a string from user and convert into toggle case ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int i,l;
clrscr();
printf("Enter any sentence you like: ");
gets(str);
l=strlen(str);
for(i=0;i<l;i+=2){
if((str[i]<='Z'&& str[i]>='A')|| (str[i]>='a' && str[i]<='z')){
if (str[i]<='Z' && str[i]>='A')str[i]=str[i]+32;
else if (str[i]<='z' && str[i]>='a')str[i]=str[i]-32;
}
if(i%3==0)i=i+2; // for randomness
}
puts(str);
getch();
}`

        },
        {
            id: "s6",
            question: "Enter a string from user and final length of the string ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int l;
clrscr();
printf("Enter the string you like: ");
gets(str);
l=strlen(str);
printf("The final length of your string is %d",l);
getch();
}`
        },

        {
            id: "s7",
            question: " Enter a string from user and compare those string ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str1[50],str2[50];
int l;
clrscr();
printf("Enter the string 1: ");
gets(str1);
printf("Enter the string 2: ");
gets(str2);
l=strcmp(str1,str2);
if(l==0)printf("Both strings are same");
else printf("Both strings are different");
getch();
}`
        },

        {
            id: "s8",
            question: "Enter a string from user and concatenate the string ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str1[50],str2[50];
int l;
clrscr();
printf("Enter the string1: ");
gets(str1);
printf("Enter the string2: ");
gets(str2);
strcat(str1,str2);
printf("Your final string is %s",str1);
getch();
}`
        },

        {
            id: "s9",
            question: "Enter a string from user and copy that string into another string ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str1[50],str2[50];
int l;
clrscr();
printf("Enter the string1 you like: ");
gets(str1);
strcpy(str2,str1);
printf("copied string2:  %s",str2);
getch();
}`
        },

        {
            id: "s10",
            question: " Enter the string from user ,enter a number from user ,if the user enter 0 then you will print first character of string ,if the user enter 1 then you will print second character of string ,if user enter 2 then you will print third character of string ,if user enter 3 then you point fourth character of string and if out of string then you will print out of bound ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int l,d;
clrscr();
printf("Enter the string you like: ");
gets(str);
l=strlen(str);
printf("which character you want you print(index): ");
scanf("%d",&d);
if (d<0) printf("Please enter a number greater than or equal to 0 only");
else if(d<l)printf("%c",str[d]);
else printf("Out of bound");
getch();
}`
        },

        {
            id: "s11",
            question: "Enter the string from user and print each character in new line ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int i;
clrscr();
printf("Enter the string: ");
gets(str);
printf("Here are each character in new line:\n");
for(i=0;str[i];i++){
printf("%c\n",str[i]);
}
getch();
}`
        },

        {
            id: "s12",
            question: "Enter the string from user and copy reverse order into another string ?",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str1[50],str2[50];
int i,l;
clrscr();
printf("Enter the string 1: ");
gets(str1);
l=strlen(str1);
for(i=0;str1[i];i++){
str2[i]=str1[l-1-i];
}
str2[i]=0;
printf("Here is the string2(reverese of string1): %s",str2);
getch();
}`
        },

        {
            id: "s13",
            question: " Enter two string from user and print difference each character",
            answer: `
        #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str1[50],str2[50];
int l1,l2,i,l;
clrscr();
printf("Enter the first string: ");
gets(str1);
l1=strlen(str1);
printf("Enter the Second string: ");
gets(str2);
l2=strlen(str2);
if(l1>l2)l=l2;
else if(l1<l2) l=l1;
else l=l1;
printf("Here are the diffrence in each character:\n");
for(i=0;i<l;i++){
printf("%d)%d\n",i+1,str1[i]-str2[i]);
}
if(l1>l2){
for(i=l;i<l1;i++){
printf("%d)%d\n",i+1,str1[i]);
}
}
else if(l1<l2){
for(i=l;i<l2;i++){
printf("%d)%d\n",i+1,str2[i]);
}
}
getch();
}`
        },

        {
            id: "s14",
            question:"Enter the string from user and enter a character , it is exist or not ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50],c;
int i;
clrscr();
printf("Enter the string you like: ");
gets(str);
printf("Enter the character: ");
scanf("%c",&c);
for(i=0;str[i];i++){
if(str[i]==c){
printf("Your string do have this character."); goto jump; }
}
printf("Your string does not have this character.");
jump:
getch();
}`
        },

        {
            id:"s15",
            question:" Enter the string from user and enter a character if it is exist then print the bound number ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50],c;
int i;
clrscr();
printf("Enter the string you like: ");
gets(str);
printf("Enter the character: ");
scanf("%c",&c);
for(i=0;str[i];i++){
if(str[i]==c){
printf("Your string do have this character at bound number: %d",i); goto jump; }
}
printf("Your string does not have this character.");
jump:
getch();
}`
        },

        {
            id:"s16",
            question:"Enter the string from user and count all vowels ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int i,v=0;
clrscr();
printf("Enter the string you like: ");
gets(str);
for(i=0;str[i];i++){
if((str[i]=='a')||(str[i]=='e')||(str[i]=='i')||(str[i]=='o')||(str[i]=='u')||(str[i]=='A')||(str[i]=='E')||(str[i]=='I')||(str[i]=='O')||(str[i]=='U'))
v+=1;
}
printf("Total number of vowels in string: %d",v);
getch();
}`
        },

        {
            id:"s17",
            question:"Enter the string from user and enter bound number and print character on that bound ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char str[50];
int i,b=0;
clrscr();
printf("Enter the string you like: ");
gets(str);
printf("Enter the bound number: ");
scanf("%d",&b);
printf("The character on the bound is : %c",str[b]);
getch();
}`
        },

        {
            id:"s18",
            question:" String palindrome example (using reverse) ?",
            answer:`
            void main(){
char str1[50],str2[50];
int i,l;
clrscr();
printf("Pallindrome are words that spells the same forward and backward for example \nNITIN,NAMAN and MOM\n");
printf("Enter any word to check if it is a pallindrome: ");
gets(str1);
l=strlen(str1);
for(i=0;str1[i];i++){
str2[i]=str1[l-1-i];
}
str2[i]=0;
l=strcmp(str1,str2);
if(l==0)printf("That is a pallindrome");
else printf("That is not a pallindrome");
getch();
}`
        },

        {
            id:"s19",
            question:"Enter the data from user the data consist of roll no. ,name ,class , marks of 5 subjects ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
#include<string.h>

void main(){
char name[25],roll[7],clas[7],mark[5][2];
clrscr();
printf("Enter all the details below\n");
printf("Enter your name: ");
gets(name);
printf("Enter the roll number: ");
gets(roll);
printf("Enter the marks of these 5 subject:\n");
printf("English: ");
gets(mark[0]);
printf("Physics: ");
gets(mark[1]);
printf("Chemistry: ");
gets(mark[2]);
printf("Biology: ");
gets(mark[3]);
printf("physical Education: ");
gets(mark[4]);
printf("Press any key to submit");
getch();
}`
        }

    
    ],
    "(LOOPS)":[
        {
            id:"l1",
            question:"Enter a number from the user and find out the binary of that number ?",
            answer:`
            #include<stdio.h>
#include<conio.h>
void main()
{ int num;
int j;
int binary[32];
int i=0;
clrscr();
printf("enter a number");
scanf("%d",&num);
if(num==0)
{ printf("binary :0");
}
while (num>0)
{ binary[i]=num%2;
num=num/2;
i++;
}
printf("binary");
for(j=i-1;j>=0;j--)
{ printf("%d",binary[j]);
}
}`
        },
    
    {
        id:"l2",
        question:"Enter a number from the user and check that the number is divisible by any prime number or not ?",


        answer:`
        #include <stdio.h>
#include <conio.h>

void main() {
    int num, i, j, isPrime, flag = 0;

    clrscr(); 

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num <= 1) {
        printf("Number must be greater than 1.");
        getch(); // Wait for key press
        return;
    }

  
    for (i = 2; i <= num / 2; i++) {
        isPrime = 1; 

     
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = 0; 
                break;
            }
        }

   
        if (isPrime == 1 && num % i == 0) {
            printf("%d is divisible by prime number %d\n", num, i);
            flag = 1;
        }
    }

    if (flag == 0)
        printf("%d is not divisible by any prime number.", num);

    getch();
}
`
    },
    {
        id:"l3",
        question:"Enter a number from the user and check it is a prime number or not ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,i,prime=1;
    clrscr();
    printf("Enter the number\n");
    scanf("%d",&n);

    if(n<=1) prime=0;
    for(i=2;i*i<=n && prime;i++)

    if(n%i==0) prime=0;
    if(prime) printf("prime\n"); 

    else printf("not prime\n");
    
}`
    },

    {
        id:"l4",
        question:"Enter a number from the user and print all digit of the number in separate line ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int a;
    char b;
    clrscr();
    printf("enter number");
    for(a=0;a<=5;a++)
    {scanf("%c",&b);
    printf("\n%c",b);}
}`
    },

    {
        id:"l5",
        question:"Write a program to print your name 1 lakh times ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int i;
    clrscr();
    for(i=0;i<100000;i++) printf("Dhruv\n");
    
}`
    },

    {
        id:"l6",
        question:"Write a program to print a series 1 to 1 lakh ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,i;
    clrscr();
    scanf("%d",&n);
    for(i=1;i<=n;i++) 
    printf("%d\n", i);
    
}`
    },

    {
        id:"l7",
        question:"Enter a number from the user and print the series from 1 to that number ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,i;
    clrscr();
    printf("Enter the number");
    scanf("%d",&n);
    for(i=1;i<=n;i++) 
    printf("%d\n", i);
    
}`
    },

    {
        id:"l8",
        question:". Enter a number from the user and print that number 100 time ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,i;
    clrscr();
    printf("Enter the number\n");
    scanf("%d",&n);
    for(i=0;i<100;i++)
     printf("%d", n);
    
}`
    },

    
    {
        id:"l9",
        question:" Write a program print all the odd number between 1 to 100 ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int i;
    clrscr();
    for(i=1;i<=100;i+=2){
     printf("%d", i);}
}`
    },

    {
        id:"l10",
        question:"Write a program print the table of 4 in the format given as below (till 20)? 4*1=4 and so on",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int i;
    clrscr();
    for(i=1;i<=20;i++)
     printf("4*%d=%d", i, 4*i);
    
}`
    },

    {
        id:"l11",
        question:"Enter the number from user and reverse the number?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,rev=0,sign=1;
    clrscr();
    printf("Enter the number\n");
    scanf("%d",&n);
    if(n<0){ sign=-1; n = -n; }
    while(n>0){ rev = rev*10 + n%10; n /= 10; }
    printf("%d", rev*sign);
    
}`
    },

    {
        id:"l12",
        question:"Enter a number from the user if the user enter 1 then you will perform addition operation by entering 2 number from user add it and display answer. if user enter 2 then subtract or if user enter 3 then multiply or if user enter 4 then divide or if user enter 5 then modulo or if any other number then print invalid .if user want to quit the program then user will enter Q. ?",
        answer:`
        #include <stdio.h>
#include <conio.h>

void main() {
    char choice;
    float num1, num2, result;

    clrscr();  

    while (1) {
     printf("\n==============================\n");
    printf("  Simple Calculator Program\n");
    printf("==============================\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("5. Modulo\n");
    printf("Q. Quit\n");
  

    printf("Enter your choice: ");
    scanf(" %c", &choice);
        if (choice == 'Q' || choice == 'q') {
            printf("\nExiting program\n");
            break; 
        }

    if (choice >= '1' && choice <= '5') {
            printf("\nEnter first number: ");
            scanf("%f", &num1);
            printf("Enter second number: ");
            scanf("%f", &num2);
        }

    switch (choice) {
            case '1':
                result = num1 + num2;
                printf("Result = %.2f\n", result);
                break;

            case '2':
                result = num1 - num2;
                printf("Result = %.2f\n", result);
                break;

            case '3':
                result = num1 * num2;
                printf("Result = %.2f\n", result);
                break;

            case '4':
                if (num2 == 0)
                    printf("Division by zero not allowed!\n");
                else {
                    result = num1 / num2;
                    printf("Result = %.2f\n", result);
                }
                break;

            case '5':
                // Modulo works only with integers
                printf("Result = %d\n", (int)num1 % (int)num2);
                break;

    default:
                printf("Invalid choice! Please try again.\n");
        }

printf("\nPress any key to continue...");
getch(); 
clrscr();
}

getch(); 
}
`
    },

    {
        id:"l13",
        question:"Enter the number from user and check its palindrome or not?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,t,rev=0;
    printf("enter no to reverse");
    scanf("%d",&n);
    t = n; if(t<0) t = -t;
    while(t>0)
    { rev = rev*10 + t%10; t /= 10; }
    if(n>=0 && rev==n) 
    printf("palindrome");
     else 
        printf("not palindrome");
    
}`
    },

    {
        id:"l14",
        question:" Enter two numbers from users, one is base and second is power. Write the result ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int base,exp,i,res=1;

    clrscr();
	
    printf("Enter the base value\n");
    scanf("%d",&base);

    
    printf("Enter the exp value\n");
    scanf("%d",&exp);
    for(i=0;i<exp;i++){
    res *= base;}
    printf("%d", res);
    
}`
    },

    {
        id:"l15",
        question:" Enter a number from user and print first digit of number ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n;
    clrscr();
    printf("Enter the number \n");
    scanf("%d",&n);
    if(n<0) 
    n = -n;
    while(n>=10)  
    n /= 10;

    printf("first number is %d", n);
 
}`
    },

    {
        id:"l16",
        question:" Enter a number from user and print total from 0 to that number ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int n,i,sum=0;
    clrscr();
    
    printf("enter no\n");
    scanf("%d",&n);
    for(i=0;i<=n;i++) 
    sum += i;
    printf("sum is %d", sum);
    
}`
    },

    {
        id:"l17",
        question:"Enter a number from user and find out factorial of that number ?",
        answer:`
        #include <stdio.h>
#include <conio.h>

void main() {
    int num, i;
    int fact = 1; 
    clrscr();  

    printf("Enter a number: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Factorial of negative number does not exist.");
    } 
    else {
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        printf("Factorial of %d = %d", num, fact);
    }

    getch();  
}
`
    },

    {
        id:"l18",
        question:"Enter two numbers from user and print range from first number to second number ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
void main(){
    int a,b,i;
    clrscr();
    printf("Enter the first range\n");
    scanf("%d",&a);
   printf("Enter the second range\n");
    scanf("%d",&b);
    for(i=a;i<=b;i++) 
   printf("the range is %d", i);
    
}`
    },

    {
        id:"l19",
        question:"Enter password from user maximum 20 digits / character press enter key if you want to exit ?",
        answer:`
        #include <stdio.h>
#include <conio.h>

void main() {
    char ch;
    int count = 0;

    clrscr();  

    printf("Enter Password (max 20 characters). Press ENTER to exit:\n");

    while (1) {
        ch = getch();        
            break;

        if (count < 20) {
            printf("*");              
             count++;      
        } else {
            printf("\nMaximum 20 characters allowed!\n");
            break;
        }
    }

    if (count == 0)
        printf("\nNo password entered. Exiting...");
    else
        printf("\n Total characters: %d", count);

    getch();  
}
`
    },

    {
        id:"l20",
        question:"Write a program to print the counting 1 to 100 with one second delay ?",
        answer:`
        #include <stdio.h>
#include <conio.h>
#include <dos.h>  
void main() {
    int i;

    clrscr();  
    printf("Counting from 1 to 100 with 1 second delay:\n\n");

    for (i = 1; i <= 100; i++) {
        printf("%d\n", i);
        delay(1000);  
    }

    
    getch(); }
`
    },

    {
        id:"l21",
        question:"Write a program to find out the Fibonacci series/ 1 to 100 (like 0 1 1 2 3 5 8 13………..) ?",
        answer:`
       #include <stdio.h>
#include <conio.h>

void main() {
    int a = 0, b = 1, c;

    clrscr(); 
    printf("Fibonacci Series from 1 to 100:\n");

    printf("%d %d ", a, b);  
    c = a + b;

    while (c <= 100) {
        printf("%d ", c);
        a = b;
        b = c;
        c = a + b;
    }

    getch(); 
}
 `
    },

    {
        id:"l22",
        question:"Enter a character from user and that character should be alphabet ?",
        answer:`
       #include <stdio.h>
#include <conio.h>

void main() {
    char ch;

    clrscr();  
    while (1) {
        printf("Enter a character ");
        scanf(" %c", &ch); 

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
            printf("'%c' is an alphabet.\n\n", ch);
        else
            printf("'%c' is not an alphabet.\n\n", ch);
    }

    getch(); }
 `
    },

    {
        id:"l23",
        question:"Enter a number from user and check it is Armstrong number or not ?",
        answer:`
       #include <stdio.h>
#include <conio.h>

void main() {
    int num, temp, rem, count = 0, i;
    int sum = 0, power, n;

    clrscr();  
    printf("Enter a number: ");
    scanf("%d", &num);

    temp = num;

       while (temp != 0) {
        count++;
        temp = temp / 10;
    }

    temp = num;

        while (temp != 0) {
        rem = temp % 10;

               power = 1;
        for (i = 1; i <= count; i++) {
            power = power * rem;
        }

        sum = sum + power;
        temp = temp / 10;
    }

    if (sum == num)
        printf("%d is an Armstrong number.", num);
    else
        printf("%d is not an Armstrong number.", num);

    getch();  
}
 `
    }
]
    
}











