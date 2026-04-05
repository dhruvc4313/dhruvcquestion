const cppCategories = {

  "SINGLE DIMENSION ARRAYS":[

{
id:"cpp_sda_1",
question:"Copy all elements of one array into another array",
answer:`// Program to copy all elements of one array into another array
#include <iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number of element: ";
    cin>>n;
    char ele[n];
    char ele2[n];
    cout<<endl<<"Enter the elementsa of array1";
    for(int i=0; i<n;i++)
    {
        cin>>ele[i];
    }
    for(int i=0;i<n;i++)
    {
        ele2[i]=ele[i];
    }
    cout<<endl<<"The copied array is";
    for(int i=0;i<n;i++)
    {
        cout<<ele2[i];
    }

}`
},

{
id:"cpp_sda_2",
question:"Find frequency of each element",
answer:`// Program to find the frequency of each element in the array
#include <iostream>
using namespace std;
int main(){
    int ele[] ={1,2,3,4,5,3,2,43,434,3,24,352,2,4,5,2,1,4,1,2};
    int n = sizeof(ele)/sizeof(ele[0]);
    for(int i =0;i<n;i++){
        int count =1;
        bool check = false;
        for(int k =0; k<i;k++){
            if(ele[i]==ele[k]){
                check = true;
                break;
            }
        }
        if(check){
            continue;
        }
        for(int j=i+1;j<n;j++){
            if(ele[i]==ele[j]){
                count++;
            }
        }
        cout<<ele[i]<<" occurs at: "<<count<<" times"<<endl;
    }
}`
},

{
id:"cpp_sda_3",
question:"Left rotate array",
answer:`// Program to left rotate the elements of an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={1,2,3,4,5,6,7,8,9,0,34,325,65,47,4,3654,74,1244};
    int n = sizeof(arr)/sizeof(arr[0]);
    int first = arr[0];
    for(int i=0; i<n-1;i++)
    {
        arr[i]=arr[i+1];
    }
        arr[n-1]=first;
    cout<<"Printing the elment to left rotate by 1"<<endl;
    for(int i =0;i<n;i++)
    {
        cout<<arr[i]<<endl;
    }
}`
},

{
id:"cpp_sda_4",
question:"Print duplicate elements",
answer:`// Program to print the duplicate elements of an array
#include <iostream>
using namespace std;
int main(){
    int ele[] ={1,2,3,4,5,3,2,43,434,3,24,352,2,4,5,2,1,4,1,2};
    int n = sizeof(ele)/sizeof(ele[0]);
    for(int i =0;i<n;i++){
        int count =1;
        bool check = false;
        for(int k =0; k<i;k++){
            if(ele[i]==ele[k]){
                check = true;
                break;
            }
        }
        if(check){
            continue;
        }
        for(int j=i+1;j<n;j++){
            if(ele[i]==ele[j]){
                count++;
            }
        }
        if (count>1)
        {
        cout<<ele[i]<<" occurs at: "<<count<<" times"<<endl;   
     }
}}`
},

{
id:"cpp_sda_5",
question:"Print array elements",
answer:`// Program to print the elements of an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,4,5,6,7,8,90,34,325,6,44,7,4,34,75,42,5,5477,55,};
    int size = sizeof(arr)/sizeof(arr[0]);
    for(int i =0; i<size;i++)
    {
        cout<<arr[i]<<endl;
    }
}`
},

{
id:"cpp_sda_6",
question:"Reverse array",
answer:`// Program to print the elements of an array in reverse order
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,4,5,6,7,8,9,343,7658,234,57,23423,54756,3223,434,56,6,7,8};
    int size = sizeof(arr)/sizeof(arr[0]);
    for(int i=size-1;i>=0;i--)
    {
        cout<<arr[i]<<endl;
    }
}`
},

{
id:"cpp_sda_7",
question:"Even position elements",
answer:`// Program to print the elements of an array present on even position
#include <iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number of elements you want to write in array ";
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    cout<<"\n"<<"Printing at the even position "<<endl;
    for(int i=1;i<n;i=i+2){
        cout<<arr[i]<<endl;
    }
    
}`
},

{
id:"cpp_sda_8",
question:"Odd position elements",
answer:`// Program to print the elements of an array present on odd position
#include <iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number of elements you want to write in array ";
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    cout<<"\n"<<"Printing at the odd position "<<endl;
    for(int i=0;i<n;i=i+2){
        cout<<arr[i]<<endl;
    }
    
}`
},

{
id:"cpp_sda_9",
question:"Largest element",
answer:`// Program to print the largest element in an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    cout<<"The largest element is: "<<max<<endl;
    
}`
},
{
id:"cpp_sda_10",
question:"Smallest element",
answer:`// Program to print the smallest element in an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={20,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int min = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    cout<<"The smallest element is: "<<min<<endl;
    
}`
},

{
id:"cpp_sda_11",
question:"Count elements in array",
answer:`// Program to print the number of elements present in an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={22,545,657,34,54,6,767,344,65,767,87,45,5445,5774,4545,43543,5466,5,5,5,5,44,5,665,464,65,557,75,57,56757,};
    int count=sizeof(arr)/sizeof(arr[0]);
    cout<<"The number of elemnents in array is: "<<count;
}`
},

{
id:"cpp_sda_12",
question:"Sum of array elements",
answer:`// Program to print the sum of all the items of the array
#include <iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number of elements of array: ";
    cin>>n;
    cout<<"\n";
    int arr[n];
    int sum =0;
    cout<<"Enter the data of array: ";
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];   
        sum = sum+arr[i];    
    }
    cout<<endl<<"The sum of elements are "<<sum;

}`
},

{
id:"cpp_sda_13",
question:"Right rotate array",
answer:`// Program to right rotate the elements of an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={1,2,3,4,5,6,7,8,9,0,34,325,65,47,4,3654,74,1244};
    int n = sizeof(arr)/sizeof(arr[0]);
    int last = arr[n-1];
    for(int i=n-1; i>0;i--)
    {
        arr[i]=arr[i-1];
    }
        arr[0]=last;
    cout<<"Printing the elment to Right rotate by 1"<<endl;
    for(int i =0;i<n;i++)
    {
        cout<<arr[i]<<endl;
    }

}`
},

{
id:"cpp_sda_14",
question:"Sort ascending",
answer:`// Program to sort the elements of an array in ascending order

#include <iostream>
using namespace std;

int main(){
    int arr[]={2,45,34,54,67,7,443,54,657,75,34,45,65,76,34,45,45};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i = 0; i < size - 1; i++)
    {
        for(int j = i + 1; j < size; j++)
        {
            if(arr[i] > arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in ascending order: ";
    for(int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`
},

{
id:"cpp_sda_15",
question:"Sort descending",
answer:`// Program to sort the elements of an array in descending order
#include <iostream>
using namespace std;

int main(){
    int arr[]={2,45,34,54,67,7,443,54,657,75,34,45,65,76,34,45,45};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i = 0; i < size - 1; i++)
    {
        for(int j = i + 1; j < size; j++)
        {
            if(arr[i] < arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in decending order: ";
    for(int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`
},

{
id:"cpp_sda_16",
question:"3rd largest element",
answer:`// Program to Find 3rd Largest Number in an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={34,67,89,34,56,78,90,23,45,67,89,23,44,687,98,45,68,345,678,4565,4657,7567,4445,455};
    int size=sizeof(arr)/sizeof(arr[0]);
    int first =arr[0],second =arr[1],third =arr[3];
    for(int i=0; i<size;i++){
        if(arr[i]>first)
        {
            third = second;
            second =first ;
            first = arr[i];
        }

    }
    cout<<"The largest is: "<<first<<endl<<"The second largest is: "<<second<<"The third largest is: "<<third;

}`
},

{
id:"cpp_sda_17",
question:"2nd largest element",
answer:`// Program to Find 2nd Largest Number in an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={34,67,89,34,56,78,90,23,45,6700,89,23,8944,687,9899,45,6800,345,6078,4565,4657,7567,4445,455};
    int size=sizeof(arr)/sizeof(arr[0]);
    int first =arr[0],second =arr[1];
    for(int i=0; i<size;i++){
        if(arr[i]>first)
        {
            second =first ;
            first = arr[i];
        }

    }
    cout<<"The largest is: "<<first<<endl<<"The second largest is: "<<second;

}`
},

{
id:"cpp_sda_18",
question:"Largest element",
answer:`// Program to Find  Largest Number in an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={34,67,89,34,56,78,90,23,45,6700,89,23,8944,687,9899,45,6800,345,6078,4565,4657,7567,4445,455};
    int size=sizeof(arr)/sizeof(arr[0]);
    int first =arr[0];
    for(int i=0; i<size;i++){
        if(arr[i]>first)
        {
            first = arr[i];
        }

    }
    cout<<"The largest is: "<<first<<endl;

}`
},

{
id:"cpp_sda_19",
question:"Remove duplicates",
answer:`// Program to Remove Duplicate Element in an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={1,2,3,4,5,6,7,8,9,3,5,8,2,9,2,5,7,6,3,12,23,34,45,12,34,45};
    int size = sizeof(arr)/sizeof(arr[0]);
    for(int i=0;i<size;i++)
    {
        for(int j=i+1;j<size;j++)
        {
            if(arr[i]==arr[j])
            {
                for(int k =j;k<size-1;k++)
                {
                    arr[k]=arr[k+1];
                }
            }
            size--;
            j--;
        }
    }
    int n= sizeof(arr)/sizeof(arr[0]);
    cout<<"The fixed array is: ";
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
}`
},

{
id:"cpp_sda_20",
question:"Odd and even numbers",
answer:`// Program to Print Odd and Even Numbers from an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,4,5,6,7,8,3,4,45,67,778,98,32,45,657,878,23,44,668,23,44,657,89,23,54,768,23,57,243,65,243,65,768,34};
    int size = sizeof(arr)/sizeof(arr[0]);
    int even = 0;
    int odd =   0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    int Even[even];
    int Odd[odd];
    int e=0,o=0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]%2==0)
        {
            Even[e++]=arr[i];
        }
        else
        {
            Odd[o++]=arr[i];
        }
    }
    int evens = sizeof(Even)/sizeof(Even[0]);
    int odds= sizeof(Odd)/sizeof(Odd[0]);
    cout<<"The number of even number are: "<<even<<" and numbers are: ";
    for(int j=0;j<evens;j++)
    {
           cout<<Even[j]<<" ";             
    }
    cout<<endl<<"The number of odd number are: "<<odd<<" and numbers are: ";
    for(int j=0;j<odds;j++)
    {            
        cout<<Odd[j]<<" ";              
    }

}`
},
{
id:"cpp_sda_21",
question:"Swap first and last elements of array",
answer:`// Write a C++ program to swap the first and last elements of an array and create a new array
#include <iostream>
using namespace std;
int main(){
    int arr1[]={1,2,3,4,5,6,7,8,9,0,23,345,67,89,12,34,56,78,90};
    int size = sizeof(arr1)/sizeof(arr1[0]);
    int arr2[size];
    arr2[0]=arr1[size-1];
    arr2[size-1]=arr1[0];
    for(int i=1;i<size-1;i++)
    {
        arr2[i]=arr1[i];
    }
    cout<<"The swapped array is: ";
    for(int i=0;i<size;i++)
    {
        cout<<arr2[i]<<" ";
    }
}`
},

{
id:"cpp_sda_22",
question:"Count even and odd elements",
answer:`// Write a C++ program to count the number of even and odd elements in a given array
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,4,5,6,7,8,3,4,45,67,778,98,32,45,657,878,23,44,668,23,44,657,89,23,54,768,23,57,243,65,243,65,768,34};
    int size = sizeof(arr)/sizeof(arr[0]);
    int even = 0;
    int odd =  0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    cout<<"The number of even element is"<<even<<endl;
    cout<<"The number of odd element is"<<odd;
}`
},

{
id:"cpp_sda_23",
question:"Find index of element",
answer:`// Write a C++ program to find the index of an array element

#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50,345,3,4,6,7,89,34,35,76,9,34,43,5,786,33,556,8,35,56,767,35,46,35,45,67,56,656,57,564,4};

    int n = sizeof(arr)/sizeof(arr[0]);

    int key;
    cout<<"The elements of array is: ";
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout <<endl << "Enter element to find: ";
    cin >> key;

    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            cout <<endl << "Element found at index: " << i;  
            return 0;         
        }
    }

    cout <<endl << "Element not found";

}`
},

{
id:"cpp_sda_24",
question:"Average of array",
answer:`// Write a C++ program to calculate the average value of array elements
#include <iostream>
using namespace std;
int main(){
    float arr[]={2,4,5,6,7,8,9,023,45,67,89,90,12,34,56,78,90,3,4,5,6,7,89};
    float size = sizeof(arr)/sizeof(arr[0]);
    float average=0;
    for(int i=0; i<size;i++)
    {
        average = average+arr[i];
    }
    cout<<"The average of the array element is: "<<average/size;
}`
},

{
id:"cpp_sda_25",
question:"Check if array contains value",
answer:`// Write a C++ program to test if an array contains a specific value
#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50,345,3,4,6,7,89,34,35,76,9,34,43,5,786,33,556,8,35,56,767,35,46,35,45,67,56,656,57,564,4};

    int n = sizeof(arr)/sizeof(arr[0]);

    int key;
    cout<<"The elements of array is: ";
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout <<endl << "Enter element to find: ";
    cin >> key;

    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            cout <<endl << "Element found";  
            return 0;         
        }
    }

    cout <<endl << "Element not found";

}`
},

{
id:"cpp_sda_26",
question:"Find max and min",
answer:`// Write a C++ program to find the maximum and minimum value of an array
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
     int min = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    cout<<"The smallest element is: "<<min<<endl;
    cout<<"The largest element is: "<<max<<endl;
    
}`
},

{
id:"cpp_sda_27",
question:"Insert element at position",
answer:`// Write a C++ program to insert an element (specific position) into an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={34,56,7,6,34,5,7,6,7,4,6,454,6,6,67,545,65,7,6,3,57,4,56,45,7,76,8,45,45,6,6,867,56};
    int size =sizeof(arr)/sizeof(arr[0]);
    int write,data;
    cout<<"The total size of array: "<<size;
    cout<<endl<<"Enter the position of array you want to write: ";
    cin>>write;
    cout<<endl<<"Enter the data: ";
    cin>>data;
   
    if(write<size)
    {
        arr[write-1]=data;
    }
    else
    {
        cout<<endl<<"out of bounding box";
    }
    cout<<endl<<"updated array";
    for(int i=0;i<size;i++)
    {
        cout<<arr[i]<<" ";
    }
    

}`
},

{
id:"cpp_sda_28",
question:"Reverse array (another)",
answer:`// Write a C++ program to reverse an array of integer values
#include<iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,7,8,9,0,34,56,78,90,231,2,3,45,7,89,4,45,68,989,9,5,2,4,54};
    int size = sizeof(arr)/sizeof(arr[0]);

    cout<<"The original array is: ";
    for(int i=0;i<size;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl<<"The reversed array is: ";
    for(int i=size-1;i>=0;i--)
    {
        cout<<arr[i]<<" ";
    }
}`
},

{
id:"cpp_sda_29",
question:"Difference max and min",
answer:`// Write a C++ program to get the difference between the largest and smallest values in an array of integers
#include <iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
     int min = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    cout<<"The Difference of Maximum: "<<max<<" and Minimum: "<<min<<" is "<<max-min;
    
}`
},

{
id:"cpp_sda_30",
question:"Segregate 0s and 1s",
answer:`// Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s    
#include <iostream>
using namespace std;

int main() {
    int arr[] = {0, 1, 0, 1, 1, 0, 0, 1,0,1,1,1,1,1,0,0,0,0,0,0};
    int n = sizeof(arr) / sizeof(arr[0]);

    int left = 0, right = n - 1;

    while (left < right) {
        
        while (arr[left] == 0 && left < right) {
            left++;
        }

        
        while (arr[right] == 1 && left < right) {
            right--;
        }

       
        if (left < right) {
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }

    
    cout << "Segregated array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}`
},

{
id:"cpp_sda_31",
question:"Cyclic rotate array",
answer:`// Write a C++ program to cyclically rotate a given array clockwise by one
#include<iostream>
using namespace std;
int main(){
    int arr[]={3,4,56,76,34,56,87,90,1,2,3,4,5,6,7,8,0,90,78,56,34,23,43};
    int size = sizeof(arr)/sizeof(arr[0]);
    int right = arr[size-1];
    cout<<"The original array: ";
    for(int i=0;i<size;i++)
    {
        cout<<arr[i]<<" ";
    }

    for(int i=size-1;i>0;i--)
    {
        arr[i]=arr[i-1];
    }
    arr[0]=right;
    cout<<endl<<"The reversed array: ";
    for(int i=0;i<size;i++)
    {
        cout<<arr[i]<<" ";
    }

}`
},

{
id:"cpp_sda_32",
question:"Print unique elements",
answer:`// Write a C++ program to print all unique element in an array
#include<iostream>
using namespace std;
int main(){
    int arr[]={34,56,7,8,1,2,3,4,5,6,8,9,80,1,2,3,4,5,6,7,8,91,2,3,4,5,6,7,8,12,3,45,56,78,90,23};
    int unique =0;
    int size = sizeof(arr)/sizeof(arr[0]);
    cout <<"The unique elemenets are: ";
    for(int i=0;i<size;i++)
    {
        if(arr[i]!=arr[i+1])
        {
            unique = arr[i];
            cout<<unique<<" ";
        }
    }
    
}`
}

],
  "FUNCTIONS":[

{
id: "cpp_f_1",
question: "Write a C++ method to find the smallest number among three numbers.",
answer: `#include <iostream>
using namespace std;

int smallest(int a, int b, int c)
{
    if (a <= b && a <= c)
        cout << a;
    else if (b <= a && b <= c)
        cout << b;
    else
        cout << c;
}

int main()
{
    int a, b, c;
    cout << "Enter three numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    smallest(a, b, c);
}`
},

{
id: "cpp_f_2",
question: "Write a C++ method to compute the average of three numbers.",
answer: `#include <iostream>
using namespace std;

float average(float a, float b, float c)
{
    return ((a + b + c) / 3);
}

int main()
{
    float a, b, c;
    cout << "Enter three numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    cout << average(a, b, c);
}`
},

{
id: "cpp_f_3",
question: "Write a C++ method to display the middle character of a string.",
answer: `#include <iostream>
#include <string>
using namespace std;

int mid(string str)
{
    int fir = str.length();
    if (fir % 2)
        cout << "the middle character is:-" << str[fir / 2 - 1] << str[fir / 2];
    else
        cout << "the middle character is: " << str[fir / 2];
}

int main()
{
    string text;
    cout << "Enter the text you like:";
    cin >> text;
    mid(text);
}`
},

{
id: "cpp_f_4",
question: "Write a C++ method to find all twin prime numbers less than 100.",
answer: `#include <iostream>
using namespace std;

void twinPrime()
{
    for (int i = 2; i < 100; i++)
    {
        int isPrime = 1;
        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
                break;
            }
        }
        if (isPrime)
        {
            int a = i + 2;
            int isPrime2 = 1;
            for (int b = 2; b < a; b++)
            {
                if (a % b == 0)
                {
                    isPrime2 = 0;
                    break;
                }
            }
            if (isPrime2)
                cout << i << " " << a << endl;
        }
    }
}

int main()
{
    cout << "Here are all the pair of Prime Numbers which are less than hundred: " << endl;
    twinPrime();
}`
},

{
id: "cpp_f_5",
question: "Write a C++ method to count the number of digits with value 2.",
answer: `#include <iostream>
using namespace std;

int countTwo(int n)
{
    int count = 0;
    if (n < 0)
        n = n * -1;

    while (n > 0)
    {
        if (n % 10 == 2)
            count++;
        n = n / 10;
    }
    return count;
}

int main()
{
    int num;
    cout << "Enter number: ";
    cin >> num;
    cout << "Number of digits with value 2 = " << countTwo(num);
}`
},

{
id: "cpp_f_6",
question: "Write a C++ method to check whether three numbers are consecutive or not.",
answer: `#include <iostream>
using namespace std;

void check(int a, int b, int c)
{
    if (((b == a + 1) && (c == b + 1)) || ((b == a - 1) && (c == b - 1)))
        cout << "Numbers are consecutive";
    else
        cout << "Numbers are not consecutive";
}

int main()
{
    int a, b, c;
    cout << "Enter three integers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    check(a, b, c);
}`
},

{
id: "cpp_f_7",
question: "Write a C++ method to check whether all characters of a string are vowels.",
answer: `#include <iostream>
using namespace std;

int checkVowels(string str)
{
    for (int i = 0; i < str.length(); i++)
    {
        char ch = str[i];
        if (!(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'))
            return 0;
    }
    return 1;
}

int main()
{
    string str;
    cout << "Enter a string: ";
    cin >> str;
    if (checkVowels(str))
        cout << "All characters are vowels";
    else
        cout << "Not all characters are vowels";
}`
},

{
id: "cpp_f_8",
question: "Write a program to perform arithmetic operations using functions.",
answer: `// menu driven operations code (same as your file)`
},

{
id: "cpp_f_9",
question: "Write a program to add 10 numbers using function.",
answer: `#include <iostream>
using namespace std;

void addNumbers()
{
    int num, sum = 0;
    for (int i = 1; i <= 10; i++)
    {
        cout << "Enter number: ";
        cin >> num;
        sum += num;
    }
    cout << "Total sum = " << sum;
}

int main()
{
    addNumbers();
}`
},

{
id: "cpp_f_10",
question: "Write a program to return an array from function.",
answer: `#include <iostream>
using namespace std;

int *createArray()
{
    static int arr[5];
    cout << "Enter 5 numbers:\\n";
    for (int i = 0; i < 5; i++)
    {
        cout << "number " << i + 1 << ": ";
        cin >> arr[i];
    }
    return arr;
}

int main()
{
    int *p = createArray();
    cout << "Array elements are:\\n";
    for (int i = 0; i < 5; i++)
        cout << p[i] << " ";
}`
},

{
id: "cpp_f_12",
question: "Write a program to swap numbers using call by address.",
answer: `#include <iostream>
using namespace std;

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x, y;
    cout << "Enter two numbers you like: " << endl;
    cin >> x >> y;

    cout << "Before swapping:\\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;

    swap(&x, &y);

    cout << "After swapping:\\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
}`
},

{
id: "cpp_f_13",
question: "Write a program to swap numbers using call by reference.",
answer: `#include <iostream>
using namespace std;

void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

int main()
{
    int x, y;
    cout << "Enter two numbers you like: " << endl;
    cin >> x >> y;

    cout << "Before swapping:\\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;

    swap(x, y);

    cout << "After swapping:\\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
}`
},

{
id: "cpp_f_14",
question: "Write a function to find power of a number.",
answer: `#include <iostream>
using namespace std;

int Power(int base, int power)
{
    int res = base;
    if (power == 0) return 1;
    for (int i = 0; i < power - 1; i++)
        res *= base;
    return res;
}

int main()
{
    int base, power;
    cout << "Enter the base number: ";
    cin >> base;
    cout << "Enter the Power: ";
    cin >> power;

    cout << "Result: " << Power(base, power);
}`
},

{
id: "cpp_f_15",
question: "Write a function to find cube of a number.",
answer: `#include <iostream>
using namespace std;

int cube(int number)
{
    return number * number * number;
}

int main()
{
    int num;
    cout << "Enter the number: ";
    cin >> num;

    cout << "Cube of the Number is : " << cube(num);
}`
}

],
  "STRINGS": [{
    id: "cpp_strings_1",
    question: "Write a C++ program to check whether two strings are anagrams of each other.",
    answer: `// Program to Check Anagram
#include <iostream>
#include<cstring>
using namespace std;
#include <iostream>
using namespace std;

int main() {
    string str1, str2;

    cout << "Enter the first string: ";
    cin >> str1;

    cout << "Enter the second string: ";
    cin >> str2;

    if(str1.length() != str2.length()) {
        cout << "Not an Anagram";
        return 0;
    }

    bool used[100] = {false}; // track matched chars

    for(int i = 0; i < str1.length(); i++) {
        bool found = false;

        for(int j = 0; j < str2.length(); j++) {
            if(str1[i] == str2[j] && !used[j]) {
                used[j] = true;
                found = true;
                break;
            }
        }

        if(!found) {
            cout << "Not an Anagram";
            return 0;
        }
    }

    cout << "Anagram";
    return 0;
}`
  },
  {
    id: "cpp_strings_2",
    question: "Write a C++ program to swap two characters entered by the user.",
    answer: `#include<iostream>
using namespace std;

int main(){
    char str[3]; 

    cout << "Enter 2 characters: ";
    cin >> str[0] >> str[1];

   
    char temp = str[0];
    str[0] = str[1];
    str[1] = temp;

    cout << "Swapped: ";
    for(int i = 0; i < 2; i++){
        cout << str[i];
    }

    return 0;
}`
  },
  {
    id: "cpp_strings_3",
    question: "Write a C++ program to check if a string contains only digits.",
    answer: `// Program to Check if a String contains only digits?
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string (only numeric allowed)";
    cin>>str;
    bool istrue = true;
    for(int i=0; i<str.length();i++){
        if(str[i]<'0'||str[i]>'9'){
            istrue = false;
            break;
        }
    }
    if(istrue){
        cout<<"Input valid on number";
    }
    else{
        cout<<"Invalid input";
    }
}`
  },
  {
    id: "cpp_strings_4",
    question: "Write a C++ program to perform a deep copy of a string.",
    answer: `// Program to perform Deep Copy for String?
#include <iostream>
#include <cstring>
using namespace std;
int main(){
    char Str[100];
    char str2[100];
    cout<<"Enter the string1: ";
    cin>>Str;
    strcpy(Str,str2);
    cout<<endl<<"Converted: "<<Str<<endl<<str2;
}`
  },
  {
    id: "cpp_strings_5",
    question: "Write a C++ program to remove all occurrences of a given character from a string.",
    answer: `// Program to remove all occurrences of a given character from input String?
#include<iostream>
using namespace std;
int main(){
    char str[100],ch;
    int j=0;
    cout<<"Enter the string: ";
    cin>>str;
    cout<<endl<<"Enter the character to be removed: ";
    cin>>ch;
    for(int i=0; str[i]!='\\0';i++){
        if(str[i]!=ch){
            str[j++]=str[i];
        }
    }
    str[j]='\\0';
    cout<<"Updated String: "<<str;    
}`
  },
  {
    id: "cpp_strings_6",
    question: "Write a C++ program to add characters to a string using strcat.",
    answer: `// Program to Add Characters to a String
#include <iostream>
#include <cstring>
using namespace std;
int main(){
    char str[30], str2[30];
   cout<<"Enter the string: ";
    cin>>str;
    cout<<endl<<"Enter the characters: ";
    cin>>str2;
    strcat(str,str2);
    cout<<endl<<"character added: "<<str;
    

}`
  },
  {
    id: "cpp_strings_7",
    question: "Write a C++ program to check whether a string is a palindrome.",
    answer: `// Program to check whether a string is a Palindrome
#include <iostream>
using namespace std;
int main(){
    string str,str2;
    cout<<"Enter the string to check: ";
    cin>>str;
    str2 = str;
    int size = str.length();
    for(int i =0; i<size;i++){
        str2[i]=str[size-1-i];
        
    }
    cout<<"Converted: "<<str2;
    if(str==str2){
        cout<<endl<<"Palindrome";
    }
    else{
        cout<<"not Palindrome";
    }
}`
  },
  {
    id: "cpp_strings_8",
    question: "Write a C++ program to convert an enum value to its string representation.",
    answer: `// Program to Convert Enum to String
#include <iostream>
using namespace std;
int main(){
    enum Day {MON,TUE,WED,THU,FRI,SAT,SUN};
    Day d = WED;
    string DayName[]={"MON","TUE","WED","THU","FRI","SAT","SUN"};
    cout<<"Day: "<<DayName[d];

}`
  },
  {
    id: "cpp_strings_9",
    question: "Write a C++ program to count the number of words in a string.",
    answer: `// Program to count number of words in a String?
#include<iostream>
#include <cstring>
using namespace std;
int main(){
    string str;
    int count =0;
    cout<<"Enter the data of string ";
    getline(cin, str);
    if(str.length()==0){
        cout<<endl<<"Number of Words: 0";
        return 0;
    }
    for(int i=0; i<str.length();i++){
        if(str[i]==' '){
            count++;
        }
    }
    cout<<endl<<"The number of words are: "<<count;

}`
  },
  {
    id: "cpp_strings_10",
    question: "Write a C++ program to count the total number of characters in a string.",
    answer: `    // Program to count the total number of characters in a string
#include <iostream>
#include <cstring>
using namespace std;
int main(){
    string str;
    int count = 0;
    cout<<"Enter the string Data: ";
    getline(cin, str);
    if(str.length()==0){
        cout<<endl<<"The number of Character: 0";
        return 0;
    }
    count = str.length();
    cout<<endl<<"The number of character is: "<<count;

}`
  },
  {
    id: "cpp_strings_11",
    question: "Write a C++ program to count the total number of punctuation characters in a string.",
    answer: `// Program to count the total number of punctuation characters exists in a String
#include <iostream>
using namespace std;
int main(){
    string str;
    int count = 0;
    cout<<"Enter the String Data: ";
    getline(cin,str);
    if(str.length()==0){
        cout<<"Not valid ";
        return 0;
    }
    for(int i =0; i<str.length(); i++){
        char ch = str[i];
        if(!(ch>='a'&& ch<='z'||
             ch>='A'&& ch<='Z'||
             ch>='0'&& ch<='9')){
                count++;
             }
    }
    cout<<endl<<"The number of punchuations are: "<<count;

}`
  },
  {
    id: "cpp_strings_12",
    question: "Write a C++ program to count vowels and consonants in a string.",
    answer: `// Program to count vowels and consonants in a string
#include<iostream>
using namespace std;

int main(){
    string str;
    int vowels = 0, consonants = 0;

    cout << "Enter the String: ";
    getline(cin, str);

    if(str.length() == 0){
        cout << "\\nNothing is Entered";
        return 0;
    }

    for(int i = 0; i < str.length(); i++){
        char ch = str[i];

   
        if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')){
            
      
            if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||
               ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
                vowels++;
            }
            else{
                consonants++;
            }
        }
    }

    cout << "\\nThe vowels are: " << vowels;
    cout << "\\nThe consonants are: " << consonants;

    return 0;
}`
  },
  {
    id: "cpp_strings_13",
    question: "Write a C++ program to check whether one string is a rotation of another string.",
    answer: `#include <iostream>
using namespace std;

int main(){
    string str1, str2;

    cout << "Enter the string 1: ";
    cin >> str1;

    cout << "\\nEnter the string 2: ";
    cin >> str2;

    if(str1.length() != str2.length()){
        cout << "\\nNot Rotated";
        return 0;  
    }

    string temp = str1 + str1;
    bool found = false;

    for(int i = 0; i <= temp.length() - str2.length(); i++){
        int j;

        for(j = 0; j < str2.length(); j++){
            if(temp[i + j] != str2[j]){
                break;
            }
        }

        if(j == str2.length()){
            found = true;
            break;   
        }
    }

    if(found){
        cout << "\\nThe String is Rotated";
    }
    else{
        cout << "\\nNot Rotated";
    }

    return 0;
}`
  },
  {
    id: "cpp_strings_14",
    question: "Write a C++ program to divide a string into N equal parts.",
    answer: `// Program to divide a string in 'N' equal parts.
#include <iostream>
using namespace std;
int main(){
    string str1;
    cout<<"Enter the String To divide: ";
    cin>>str1;
    int len = str1.length();
    int N;
    cout<<"\\nEnter the Part to Divide the String";
    cin>>N;
    if(len%2!=0){
        cout<<"\\nString is not divisible by "<<N;
        return 0;
    }
    int part = len/N;
    for(int i = 0; i<len; i = i+part){
        for(int j = i; j< i+part; j++){
            cout<<str1[j];
        }
        cout<<endl;
    }

}`
  },
  {
    id: "cpp_strings_15",
    question: "Write a C++ program to find all subsets of a string.",
    answer: `// Program to find all subsets of a string
#include <iostream>
#include <cmath>
using namespace std;
int main(){
    string str;
    cout<<"Enter the String to find Substet: ";
    cin>>str;
    int len = str.length();
    int pos = pow(2,len);
    for(int i = 0; i<pos; i++){
        for(int j =0; j<len; j++){
            if(i&(1<<j)){
                cout<<str[j];
            }
        }
        cout<<endl;
    }
}`
  },
  {
    id: "cpp_strings_16",
    question: "Write a C++ program to find all the permutations of a string.",
    answer: `// Program to find all the permutations of a string
#include <iostream>
using namespace std;

void permute(string &str, int l, int r){
    if(l == r){
        cout << str << endl;
        return;
    }

    for(int i = l; i <= r; i++){
        swap(str[l], str[i]);
        permute(str, l + 1, r);
        swap(str[l], str[i]); 
    }
}

int main(){
    string str;
    cout << "Enter the string: ";
    cin >> str;

    permute(str, 0, str.length() - 1);

    return 0;
}`
  },
  {
    id: "cpp_strings_17",
    question: "Write a C++ program to find the maximum and minimum occurring character in a string.",
    answer: `// Program to find maximum and minimum occurring character in a string
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to find: ";
    getline(cin,str);
    int fre1[256]={0};
    for(int i = 0; i<str.length(); i++){
        fre1[(int)str[i]]++;
    }
    int max = 0 , minv = str.length();
    char maxc, minc;
    for(int i = 0; i<256; i++){
        if(fre1[i]>0){
            if(fre1[i]>max){
                 max = fre1[i];
                 maxc = char(i);
            }
            if(fre1[i]<minv){
                minv = fre1[i];
                minc = char(i);
            }
        }
    }
    cout<<"\\n Maximum occurance: "<<maxc<<"\\n Count: "<<max;
    cout<<"\\n Minimum occurance: "<<minc<<"\\n Count: "<<minv;
}`
  },
  {
    id: "cpp_strings_18",
    question: "Write a C++ program to find the reverse of a string.",
    answer: `// Program to find Reverse of the string
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the String to reverse: ";
    getline(cin, str);
    int len = str.length();
    char reverse[len];
    for(int i =0; i<len; i++){      
            reverse[i]=str[len -1 -i];
    }
    cout<<"\\n Printing the Reversed: ";
    for(int i =0; i<len; i++){
        cout<<reverse[i];
    }
}`
  },
  {
    id: "cpp_strings_19",
    question: "Write a C++ program to find the duplicate characters in a string.",
    answer: `// Program to find the duplicate characters in a string
#include <iostream>
using namespace std;
int main(){
    string  str; 
    cout<<"Enter the string to find: ";
    getline(cin,str);
    int freq[256] = {0};
    for(int i =0; i<str.length(); i++){
        if(str[i]!=' '){
            freq[(int)str[i]]++;
        }
    }
    for(int i =0; i<256; i++){
        if(freq[i]>1){
              cout<< "\\nDuplicates: "<< char(i) << " -----> " << freq[i] << endl;
        }
    }

}`
  },
  {
    id: "cpp_strings_20",
    question: "Write a C++ program to find the duplicate words in a string.",
    answer: `// Program to find the duplicate words in a string
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the String to find Duplicates";
    getline(cin, str);
    int n = str.length();
    string dup[100];
    int index = 0;
    int count[100]={0};
    string temp = "";
    for(int i = 0; i<=n; i++){
        if(str[i]==' ' ||str[i]=='\\0'){
            dup[index]=temp;
            index++;
            temp="";
        }
        else{
            temp = temp+str[i];
        }
    }

    for(int i =0; i<index; i++){
        if(dup[i]==""){
            continue;
        }
        for(int j=i+1;j<index;j++){
            if(dup[i]==dup[j]){
                count[i]++;
                dup[j]="";

            }
        }
    }

    for(int i =0; i<index; i++){
        if(count[i]>0){
            cout<<"The Duplicates Are: "<<dup[i]<<endl;
        }
    }


}`
  },

  {
    id: "cpp_string_21",
    question: "Write a C++ program to find the frequency of each character in a given string.",
    answer: `// Program to find the frequency of characters
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to find ";
    getline(cin,str);
    int freq[256]={0};
    for(int i=0; i<str.length();i++){
        freq[str[i]]++;
    }
    for(int i=0; i<str.length();i++){
        if(freq[str[i]]!=0){
            cout<<str[i]<<" occurs at "<<freq[str[i]]<<"Times\n";
            freq[str[i]]=0;
        }
    }
    
}`
  },
  {
    id: "cpp_string_22",
    question: "Write a C++ program to find the largest and smallest word in a given string.",
    answer: `// Program to find the largest and smallest word in a string
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to find: ";
    getline(cin,str);
    string words = "", largest = "", smallest = "";
    for(int i=0; i<str.length(); i++){
        if(str[i]==' '||str[i]=='\0'){
        if(words.length()>0){
            if(largest ==""&&smallest ==""){
                largest =smallest =words;
            }
            else{
                if(words.length()>largest.length()){
                largest = words;
             }
                 if(words.length()<smallest.length()){
                 smallest = words;
                }
             }
        }   
        words = "";
    }
    else{
            words = words+str[i];
        }
        
    }
    cout<<"Smallest number is: "<<smallest;
    cout<<"\nLargest word is: "<<largest;
}`
  },
  {
    id: "cpp_string_23",
    question: "Write a C++ program to find the longest repeating sequence in a string.",
    answer: `// program to find the longest repeating sequence in a string
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string: ";
    getline(cin,str);
    int size = str.length();
    string longest ="";
    for(int i= 0; i<size; i++){
        for(int j = i+1; j<size; j++){
            string temp ="";
            int x = i, y = j;
            while(y < size && str[x] == str[y]){
                temp = temp +str[x];
                x++;
                y++;
            }
            if(temp.length()>longest.length()){
                longest = temp;
            }
        }
    }
    cout<<"The Longest sequence is: "<<longest;
}`
  },
  {
    id: "cpp_string_24",
    question: "Write a C++ program to find the most repeated word in a text file.",
    answer: `// Program to find the most repeated word in a text file
#include <iostream>
#include <fstream>
using namespace std;
int main(){
    ifstream fobj ("data.txt");
    if(!fobj){
        cout<<"File does not exist";
        return 0;
    }
    string words[1000];
    string word;
    int index =0;
    int count[1000]={0};
    while(fobj>>word){
        words[index]=word;
        index++;
    }
    for(int i=0; i<index; i++){
        if(words[i]==""){
            continue;
        }
            for(int j= i+1;j<index; j++){
                if(words[i]==words[j]){
                    count[i]++;
                    words[j]="";
                }
            }
    }
     int max = 0;
    string most;

    for(int i = 0; i < index; i++){
        if(count[i] > max){
            max = count[i];
            most = words[i];
        }
    }

    cout<<"\nMost repeated word: "<<most;
    cout<<"\nFrequency: "<<max + 1;
    fobj.close();
}`
  },
  {
    id: "cpp_string_25",
    question: "Write a C++ program to find the number of words in a given text file.",
    answer: `// Program to find the number of the words in the given text file
#include <iostream>
#include <fstream>
using namespace std;
int main(){
    fstream fobj("data.txt");
    if(!fobj){
        cout<<"File Foes not exist: ";
    }
    string word;
    int count =0, index =0;
    while(fobj>>word){
        count++;
    }
    cout<<"The numbers of words are: "<<count;
    fobj.close();
}`
  },
  {
    id: "cpp_string_26",
    question: "Write a C++ program to write a string to a file and then count the frequency of a specific character in that file.",
    answer: `#include <iostream>
#include <fstream>
using namespace std;

int main(){
    fstream fobj("data2.txt", ios::out);

    string str;
    cout<<"Enter the string to find character: ";
    getline(cin, str);

    fobj << str;
    fobj.close();

    cout<<"\\nEnter the character to find: ";
    char ch;
    cin >> ch;

    fstream fobj2("data2.txt", ios::in);

    int count = 0;
    char c;

    while(fobj2.get(c)){
        if(c == ch){
            count++;
        }
    }

    cout<<"\\nCharacter '"<<ch<<"' occurs "<<count<<" times";

    fobj2.close();
    return 0;
}`
  },
  {
    id: "cpp_string_27",
    question: "Write a C++ program to insert a string into another string at a specified position.",
    answer: `// Program to Insert a string into another string
#include <iostream>
#include <cstring>
using namespace std;
int main(){
    string str1, str2, res="";
    cout<<"Enter the string 1: ";
    getline(cin, str1);
    cout<<"\\nEnter the string 2: ";
    getline(cin,str2);
    int pos;
    cout<<"\\n Enter the position of insertion: ";
    cin>>pos;
    for(int i =0; i<pos;i++){
        res = res + str1[i];
    }
    res = res + str2;
    for(int i = pos; i<str1.length(); i++){
        res = res+str1[i];
    }
    cout<<"The inserted string is: "<<res;
}`
  },
  {
    id: "cpp_string_28",
    question: "Write a C++ program to print each word of a string on a new line.",
    answer: `#include <iostream>
using namespace std;

int main(){
    string str;
    cout<<"Enter the string: ";
    getline(cin, str);

    for(int i = 0; i < str.length(); i++){
        if(str[i] == ' '){
            cout << endl;   
        }
        else{
            cout << str[i];
        }
    }

    return 0;
}`
  },
  {
    id: "cpp_string_29",
    question: "Write a C++ program to print only even length words from a given string.",
    answer: `// Program to Print even length words
#include <iostream>
using namespace std;
int main(){
    string str1;
    cout<<"Enter the string: ";
    getline(cin,str1);
    string str2 = "";
    for(int i=0; i<=str1.length(); i++){
        if(str1[i]==' '||str1[i]=='\0'){
            if(str2.length()%2==0&&str2.length()>0){
                cout<<"Even words: "<<str2<<"\\n";              
            }
            str2 ="";
        }
        else{
            str2 = str2+str1[i];
        }
    }
}`
  },
  {
    id: "cpp_string_30",
    question: "Write a C++ program to print the smallest and largest palindrome word in a given string.",
    answer: `// Program to print smallest and biggest possible palindrome word in a given string
#include <iostream>
using namespace std;
bool palindrome(string word){
    int start =0;
    int end= word.length()-1;
    while(start<end){
        if(word[start]!=word[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
int main(){
    string str;
    cout<<"Enter the string to find: ";
    getline(cin, str);
    string word ="", smallest = "", longest = "";
    for(int i=0; i<=str.length(); i++){
        if(str[i]==' '|| str[i]=='\0'){
            if(word.length()>0&&palindrome(word) ){
                if(smallest == "" && longest ==""){
                    smallest = longest = word;
                }
                else{
                    if(word.length()>longest.length()){
                        longest = word;
                    }
                    if(word.length()<smallest.length()){
                        smallest = word;
                    }
                }

            }
            word = "";
        }
        else{
            word = word + str[i];
        }
    }
    if(smallest == ""){
        cout<<"No Palindrome\\n";
    }
    else{
        cout<<"Largest Palindrome: "<<longest<<"\\n";
        cout<<"Smallest Palindrome: "<<smallest<<"\\n";
    }
}`
  },
  {
    id: "cpp_string_31",
    question: "Write a C++ program to remove all white spaces from a string using file handling.",
    answer: `#include <iostream>
#include <fstream>
using namespace std;

int main(){
    fstream obj("file.txt", ios::out);

    string str;
    cout<<"Enter the string: ";
    getline(cin, str);

    obj << str;
    obj.close();

    fstream obj2("file.txt", ios::in);

    char ch;
    string result = "";

    while(obj2.get(ch)){
        if(ch != ' '){   
            result += ch;
        }
    }

    cout<<"White Space removed: "<<result;

    obj2.close();
    return 0;
}`
  },
  {
    id: "cpp_string_32",
    question: "Write a C++ program to replace lowercase characters with uppercase and uppercase characters with lowercase in a string.",
    answer: `// Program to replace lower-case characters with upper-case and vice-versa
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to convert: ";
    getline(cin, str);
    for(int i=0; i<str.length(); i++){
        if(str[i]!=' '){
            if(str[i]>='a'&&str[i]<='z'){
                char ch = str[i];
                ch = ch-32;
                str[i]=ch;
            }
            else if(str[i]>='A'&&str[i]<='Z'){
                char ch = str[i];
                ch = ch+32;
                str[i]=ch;
            }
            else{
                continue;
            }
        }
    }
    cout<<"Converted: "<<str;
}`
  },
  {
    id: "cpp_string_33",
    question: "Write a C++ program to replace all spaces in a string with a specific character entered by the user.",
    answer: `// Program to replace the spaces of a string with a specific character
#include<iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the String to Replace: ";
    getline(cin,str);
    char ch;
    cout<<"\\n Enter the Character to Replace space: ";
    cin>>ch;
    for(int i=0; i<str.length(); i++){
        if(str[i]==' '){
            str[i] = ch;
        }
    }
    cout<<"Replaced String is: "<<str;
}`
  },
  {
    id: "cpp_string_34",
    question: "Write a C++ program to separate and print each individual character of a string on a new line (excluding spaces).",
    answer: `// Program to separate the Individual Characters from a String
#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to seperate: ";
    getline(cin,str);
    cout<<"Seperated string by character is: \\n";
    for(int i =0; i<str.length();i++){
        if(str[i]!=' '){
            cout<<str[i]<<endl;
        }
    }
}`
  },
  {
    id: "cpp_string_35",
    question: "Write a C++ program to split a string into substrings based on spaces.",
    answer: `// Program to Splitting into a number of sub-strings
#include <iostream> 
using namespace std;
int main(){
    string str;
    cout<<"Enter the String to Split: ";
    getline(cin, str);
    string split = "";
    for(int i=0; i<=str.length(); i++){
        if(str[i]==' '||str[i]=='\0'){
            if(split.length()){
                cout<<split<<endl;
            }split ="";
        }
        else{
            split = split+str[i];
        }
    }
}`
  },
  {
    id: "cpp_string_36",
    question: "Write a C++ program to swap two string variables without using a third or temporary variable.",
    answer: `// Program to swap two string variables without using third or temp variable.

#include <iostream>
using namespace std;

int main(){
    string str1, str2;
    cout<<"Enter first string: ";
    getline(cin, str1);
     cout<<"Enter second string: ";
    getline(cin, str2);
    str1 = str1 + str2;
    str2 = str1.substr(0, str1.length() - str2.length());
    str1 = str1.substr(str2.length());
    cout<<"\\nAfter swapping:\\n";
    cout<<"str1 = "<<str1<<endl;
    cout<<"str2 = "<<str2<<endl;
}`
  },
  {
    id: "cpp_string_37",
    question: "Write a C++ program to check if the first string contains the second string.",
    answer: `// Read two String user input and check if first contains second?

#include <iostream>
using namespace std;

int main(){
    string str1, str2;

    cout<<"Enter first string: ";
    getline(cin, str1);
    cout<<"Enter second string: ";
    getline(cin, str2);
    bool found = false;
    for(int i = 0; i <= str1.length() - str2.length(); i++){
        int j;
        for(j = 0; j < str2.length(); j++){
            if(str1[i + j] != str2[j]){
                break;
            }
        }
        if(j == str2.length()){
            found = true;
            break;
        }
    }

    if(found){
        cout<<"Second string is present in first string";
    }
    else{
        cout<<"Second string is NOT present";
    }

    return 0;
}`
  },
  {
    id: "cpp_string_38",
    question: "Write a C++ program to reverse the order of words in a given string.",
    answer: `#include <iostream>
using namespace std;

int main(){
    string str;
    cout<<"Enter the string to reverse: ";
    getline(cin, str);
    string word = "";
    for(int i = str.length() - 1; i >= 0; i--){
        if(str[i] == ' '){
            cout << word << " ";
            word = "";
        }
        else{
            word = str[i] + word;
        }
    }
    cout << word;
}`
  },
  {
    id: "cpp_string_39",
    question: "Write a C++ program to check if two strings are created with the same characters.",
    answer: `// Write a program to check if two Strings are created with same characters?
#include <iostream>
using namespace std;

int main(){
    string str1, str2;

    cout<<"Enter first string: ";
    getline(cin, str1);

    cout<<"Enter second string: ";
    getline(cin, str2);

    if(str1.length() != str2.length()){
        cout<<"Not created with same characters";
        return 0;
    }

    int freq[256] = {0};
    for(int i = 0; i < str1.length(); i++){
        freq[str1[i]]++;
    }

    for(int i = 0; i < str2.length(); i++){
        freq[str2[i]]--;
    }
    for(int i = 0; i < 256; i++){
        if(freq[i] != 0){
            cout<<"Not created with same characters";
            return 0;
        }
    }
   cout<<"Both strings are created with same characters";
}`
  }



],
  "MULTI-DIMENSION ARRAYS":[

{
id:"cpp_mda_1",
question:"Enter and display a matrix of given rows and columns.",
answer:`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int row, column;
    cout << "Enter the size of the matrix: ";
    cout << "\\nRows: ";
    cin >> row;
    cout << "Columns: ";
    cin >> column;

    int arr[row][column];

    for (int i = 0; i < row; i++)
    {
        cout << "\\nRow " << i + 1;
        for (int j = 0; j < column; j++)
        {
            cout << "\\tColumn " << j + 1 << ": ";
            cin >> arr[i][j];
        }
    }

    cout << "\\nYour Entered Matix:" << endl;
    for (int i = 0; i < row; i++)
    {
        cout << "| ";
        for (int j = 0; j < column; j++)
        {
            cout << setw(5) << arr[i][j] << " ";
        }
        cout << "|\\n";
    }
}`
},

{
id:"cpp_mda_2",
question:"Write a program to add two matrices.",
answer:`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2], matrix2[2][2], res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }

    cout << "\\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            res[i][j] = matrix1[i][j] + matrix2[i][j];

    cout << "\\nResult of two Matices Added:" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
            cout << setw(5) << res[i][j] << " ";
        cout << "|\\n";
    }
}`
},

{
id:"cpp_mda_3",
question:"Write a program to multiply two matrices.",
answer:`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2], matrix2[2][2], res[2][2];

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
        {
            cin >> matrix1[i][j];
        }

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
        {
            cin >> matrix2[i][j];
        }

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            res[i][j] = matrix1[i][0]*matrix2[0][j] + matrix1[i][1]*matrix2[1][j];

    cout << "Result:\\n";
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
            cout << res[i][j] << " ";
        cout << endl;
    }
}`
},

{
id:"cpp_mda_4",
question:"Write a program to subtract two matrices.",
answer:`#include <iostream>
using namespace std;

int main()
{
    int a[2][2], b[2][2], c[2][2];

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            cin>>a[i][j];

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            cin>>b[i][j];

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            c[i][j]=b[i][j]-a[i][j];

    for(int i=0;i<2;i++){
        for(int j=0;j<2;j++)
            cout<<c[i][j]<<" ";
        cout<<endl;
    }
}`
},

{
id:"cpp_mda_5",
question:"Write a program to check whether two matrices are equal.",
answer:`#include <iostream>
using namespace std;

int main()
{
    int a[2][2], b[2][2];
    int flag=1;

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            cin>>a[i][j];

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            cin>>b[i][j];

    for(int i=0;i<2;i++)
        for(int j=0;j<2;j++)
            if(a[i][j]!=b[i][j])
                flag=0;

    if(flag)
        cout<<"Equal";
    else
        cout<<"Not Equal";
}`
},

{
id:"cpp_mda_6",
question:"Write a program to display lower triangular matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3];
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            cin>>a[i][j];

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(i<j) cout<<"0 ";
            else cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}`
},

{
id:"cpp_mda_7",
question:"Write a program to display upper triangular matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3];
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            cin>>a[i][j];

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(i>j) cout<<"0 ";
            else cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}`
},

{
id:"cpp_mda_8",
question:"Write a program to count even and odd numbers in matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3], even=0, odd=0;
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++){
            cin>>a[i][j];
            if(a[i][j]%2==0) even++;
            else odd++;
        }

    cout<<"Even="<<even<<endl;
    cout<<"Odd="<<odd;
}`
},

{
id:"cpp_mda_9",
question:"Write a program to find sum of rows and columns.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3];

    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            cin>>a[i][j];

    for(int i=0;i<3;i++){
        int sum=0;
        for(int j=0;j<3;j++)
            sum+=a[i][j];
        cout<<"Row "<<i+1<<" sum="<<sum<<endl;
    }

    for(int i=0;i<3;i++){
        int sum=0;
        for(int j=0;j<3;j++)
            sum+=a[j][i];
        cout<<"Col "<<i+1<<" sum="<<sum<<endl;
    }
}`
},

{
id:"cpp_mda_10",
question:"Write a program to check identity matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3], flag=1;

    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            cin>>a[i][j];

    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++){
            if(i==j && a[i][j]!=1) flag=0;
            if(i!=j && a[i][j]!=0) flag=0;
        }

    if(flag) cout<<"Identity Matrix";
    else cout<<"Not Identity";
}`
},

{
id:"cpp_mda_11",
question:"Write a program to find transpose of matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3];

    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            cin>>a[i][j];

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++)
            cout<<a[j][i]<<" ";
        cout<<endl;
    }
}`
},

{
id:"cpp_mda_12",
question:"Write a program to check sparse matrix.",
answer:`#include<iostream>
using namespace std;

int main(){
    int a[3][3], zero=0, non=0;

    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++){
            cin>>a[i][j];
            if(a[i][j]==0) zero++;
            else non++;
        }

    if(zero>non) cout<<"Sparse Matrix";
    else cout<<"Not Sparse";
}`
}

],
  "BASIC PROGRAMMING CONSTRUCTS": [

{
id:"cpp_io_1",
question:"Write a C++ program to print Hello World on the screen.",
answer:`#include<iostream>
using namespace std;
int main()
{
    cout<<"hello world!";
}`
},

{
id:"cpp_io_2",
question:"Write a C++ program to print the sum of two numbers.",
answer:`#include <iostream>
using namespace std;

int main()
{
    int a, b, c;

    cout << "Enter first number: ";
    cin >> b;
    cout << "Enter second number: ";
    cin >> c;

    a = b + c;

    cout << "Sum of two number is : " << a;
}`
},

{
id:"cpp_io_3",
question:"Write a C++ program to display the product of two numbers.",
answer:`#include<iostream>
using namespace std;
int main()
{
    int a,b,c;
    cin>>a;
    cin>>b;
    c=a*b;
    cout<<"product or two number is :-"<<c;
}`
},

{
id:"cpp_io_4",
question:"Write a C++ program to perform sum, subtraction, multiplication and division.",
answer:`#include<iostream>
using namespace std;
int main()
{
    int a,b,c,d,e,f;
    b=10;
    c=20;
    a=b+c;
    d=b-c;
    e=b*c;
    f=b/c;
    cout<<"sum of numbers"<<a<<endl;
    cout<<"subtract of number"<<d<<endl;
    cout<<"product of number"<<e<<endl;
    cout<<"devision of number"<<f<<endl;
}`
},

{
id:"cpp_io_5",
question:"Write a C++ program to calculate average of five numbers.",
answer:`#include<iostream>
using namespace std;

int main()
{ cout<<"enter 5 number for calculate and print average of the numbers:-\n";
    int a,b,c,d,e,sum,sum1;
    cout<<"enter first number";
    cin>>a;
    cout<<"enter second number";
    cin>>b;
    cout<<"enter third number";
    cin>>c;
    cout<<"enter fourth number";
    cin>>d;
    cout<<"enter fifth number";
    cin>>e;
    sum=a+b+c+d+e;
    sum1=sum/5;

cout<<"answer is :-)"<<sum1;
}`
},

{
id:"cpp_io_6",
question:"Write a C++ program to swap two variables.",
answer:`#include<iostream>
#include<string>
using namespace std;

int main()
{
   string x="hii",z="hello",a;
   a=x;
   x=z;
   z=a;
   cout<<"The swapped variable is: "<<x<<"\n"<<z;
}`
},

{
id:"cpp_io_7",
question:"Write a C++ program to convert decimal number to binary.",
answer:`#include <iostream>
using namespace std;

int main()
{
    int num, binary[30], i = 0;

    cout << "Enter number: ";
    cin >> num;

    while (num > 0)
    {
        binary[i] = num % 2;
        num = num / 2;
        i++;
    }

    cout << "Binary = ";

    for (int j = i - 1; j >= 0; j--)
    {
        cout << binary[j];
    }

    return 0;
}`
},

{
id:"cpp_io_8",
question:"Write a C++ program to convert binary number to decimal.",
answer:`#include <iostream>
using namespace std;

int main()
{
    int binary, decimal = 0, base = 1, rem;

    cout << "Enter binary number: ";
    cin >> binary;

    while(binary > 0)
    {
        rem = binary % 10;          
        decimal = decimal + rem * base;
        binary = binary / 10;       
        base = base * 2;          
    }

    cout << "Decimal = " << decimal;

    return 0;
}`
},

{
id:"cpp_io_9",
question:"Write a C++ program to check whether C++ is installed or not.",
answer:`#include<iostream>
using namespace std;

int main()
{
    cout<<"c++ installed in your computer";
    return 0;
}`
},

{
id:"cpp_io_10",
question:"Write a C++ program to find sum of digits of an integer.",
answer:`#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;

    cout << "Enter an integer: ";
    cin >> num;

   if(num<0)
   num=-num;

    while (num > 0) {
        sum = sum + (num % 10); 
        num = num / 10;         
    }

    cout << "Sum of digits = " << sum;

    return 0;
}`
},

{
id:"cpp_io_11",
question:"Write a C++ program to compare two numbers.",
answer:`#include<iostream>

using namespace std;

int main()
{
    int a,b;
    cout<<"enter first number:-";
    cin>>a;
    cout<<"enter second number:-";
    cin>>b;
    if (a<b)
    {
       cout<<"B is greater than A";
    }
    else if (a==b)
    {
        cout<<"both number are equal";
    } else if (a>b)
    {
        cout<<"A is greater than B";
    }
}`
},

{
id:"cpp_io_12",
question:"Write a C++ program to count letters, spaces, numbers and other characters.",
answer:`#include<iostream>
using namespace std;

int main()
{
    char dell[1000];
    
    int letter = 0, spaces = 0, number = 0, others = 0;

    cout << "Enter a string: ";
    cin.getline(dell, 1000);   

    for (int i = 0; dell[i] != '\0'; i++)
    {
        if ((dell[i] >= 'A' && dell[i] <= 'Z') || (dell[i] >= 'a' && dell[i] <= 'z'))
        {
            letter++;
        }
        else if (dell[i] == ' ')
        {
            spaces++;
        }
        else if (dell[i] >= '0' && dell[i] <= '9')
        {
            number++;
        }
        else
        {
            others++;
        }
    }

    cout << "Letters: " << letter << endl;
    cout << "Spaces: " << spaces << endl;
    cout << "Numbers: " << number << endl;
    cout << "Other characters: " << others << endl;

    return 0;
}`
},

{
id:"cpp_io_13",
question:"Write a C++ program to print ASCII value of characters.",
answer:`#include<iostream>
using namespace std;

int main()
{
    char a[10];
    int b;
    
     cout<<"enter the char value for converison :-";
    for(int c = 0; c < 10; c++)
    {    cin >> a[c];
        b = a[c];     
        cout <<a[c]<<"=ASCII VALUE IS-:"<< b << endl;
    }
}`
},

  {
    id: "cpp_io_14",
    question: "Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn.",
    answer: `// Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn
#include <iostream>

using namespace std;

int main()
{
    int n, nn, nnn, sum;
    cout << "enter the number: ";
    cin >> n;

    nn = (n * 10) + n;
    nnn = (n * 100) + (n * 10) + n;
    sum = n + nn + nnn;

    cout << "THE ANSWER IS: " << sum;
}`
  },
  {
    id: "cpp_io_15",
    question: "Write a C++ program to display the current system time.",
    answer: `//Write a C++ program to display the system time
#include <iostream>
#include <ctime>  
using namespace std;

int main() {
    time_t currentTime = time(0);

    char* localTime = ctime(&currentTime);

    cout << "Current system time is: " << localTime << endl;

    return 0;
}`
  },
  {
    id: "cpp_io_16",
    question: "Write a C++ program to print the odd numbers from 1 to 20.",
    answer: `// Write a C++ program to print the odd numbers from 1 to 20
#include <iostream>
using namespace std;

int main()
{
    for (int b = 1; b <= 20; b++)
    {
        if (b % 2 == 1)
        {
            cout<<"odd numbers are" << b << " ";
        }
    }
    cout << endl;
    return 0;
}`
  },
  {
    id: "cpp_io_17",
    question: "Write a C++ program to print the even numbers from 1 to 20.",
    answer: `//Write a C++ program to print the even numbers from 1 to 20
#include <iostream>
using namespace std;

int main()

{
    for (int b = 1; b <= 20; b++)
    {
        if (b % 2 == 0)
        {
            cout<< b << " ";
        }
    }
    cout << endl;
    return 0;
}`
  },
  {
    id: "cpp_io_18",
    question: "Write a C++ program to convert a string to an integer.",
    answer: `// Write a C++ program to convert a string to an integer
#include<iostream>
#include<string>
using namespace std;
int main()
{
    string a;
    cin>>a;
    int b;
    b=stoi(a);
    cout<<b;
}`
  },
  {
    id: "cpp_io_19",
    question: "Write a C++ program to convert seconds to hours, minutes, and seconds.",
    answer: `// Write a C++ program to convert seconds to hour, minute and seconds
#include <iostream>
using namespace std;

int main()
{
    int num;
    int min = 0, hr = 0, sec = 0;
    cout << "Enter the Number of seconds: ";
    cin >> num;

    if (num >= 60)
    {
        min = num / 60;
        sec = num % 60;

        if (min >= 60)
        {
            hr = min / 60;
            min = min % 60;
        }
    }
    else
    {
        sec = num;
    }

    cout << "Time in new Format: " << endl;
    cout << "Hours: " << hr << endl;
    cout << "Minutes: " << min << endl;
    cout << "Seconds: " << sec << endl;
}`
  },
  {
    id: "cpp_io_20",
    question: "Write a C++ program to compute the sum of the first 100 prime numbers.",
    answer: `// Write a C++ program to compute the sum of the first 100 prime numbers
#include <iostream>
using namespace std;

int main()
{
    int isPrime;
    int count = 2;
    int sum = 2;
    int i = 3;

    while (count < 101)
    {
        isPrime = 1;

        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
            }
        }

        if (isPrime == 1)
        {
            count++;
            sum += i;
        }
        i++;
    }

    cout << endl
         << "Sum of the first 100 Prime number is : " << sum;
}`
  },
  {
    id: "cpp_io_21",
    question: "Write a C++ program to compute the square root of a given integer (without using built-in sqrt function).",
    answer: `// Write a C++ program to compute the square root of an given integer
#include<iostream>
using namespace std;
int main()
{
    int num;
    cout<<"enter a number:";
    cin>>num;

    int i;
    for(i=1;i*i<=num;i++);
    cout<<"square root "<<i-1;
}`
  },
  {
    id: "cpp_io_22",
    question: "Write a C++ program to check if a positive number is a palindrome or not.",
    answer: `// Write a C++ program to check if a positive number is a palindrome or not
#include <iostream>
using namespace std;

int main()
{
    int num;
    int isPallindrome;

    cout << "Enter the Number you like: ";
    cin >> num;

    string number;
    string check;

    int length;
    number = to_string(num);

    length = number.length();

    for (int i = 0; i < length; i++)
    {
        isPallindrome = 1;
        if (number[i] != number[length - 1 - i])
        {
            isPallindrome = 0;
            break;
        }
    }

    if (isPallindrome == 1)
    {
        cout << "The Number Entered is a Pallindrome" << endl;
    }
    else
    {
        cout << "The Number Entered is not Pallindrome" << endl;
    }
}`
  },
  {
    id: "cpp_io_23",
    question: "Write a C++ program to add two numbers without using any arithmetic operators.",
    answer: `//Write a C++ program to add two numbers without using any arithmetic operators
#include <iostream>
using namespace std;

int main()
{
    int num1, num2, sum, carry, sumhold;

    cout << "Enter the first Number: ";
    cin >> num1;
    cout << "Enter the Second Number: ";
    cin >> num2;

    sum = num1 ^ num2;   // doing XOR first
    carry = num1 & num2; // then carry

    while (carry != 0)
    {
        sumhold = sum;
        carry = carry << 1;      // left shift by one
        sum = sumhold ^ carry;   // then XOR
        carry = sumhold & carry; // then again carry
    }

    cout << "The sum of the Numbers is: " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_24",
    question: "Write a C++ program to add all the digits of a given positive integer.",
    answer: `// Write a C++ program to add all the digits of a given positive integer
#include <iostream>
using namespace std;

int main()
{
    int num, digit, sum = 0;

    cout << "Enter the positive integer: ";
    cin >> num;

    while (num != 0)
    {
        digit = num % 10;
        sum += digit;
        num /= 10;
    }

    cout << "The sum of all the digits in number is: " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_25",
    question: "Write a C++ program to find the area of a circle.",
    answer: `// C++ program to find area of circle
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int a;
    cout<<"enter the value for area of circle";
    cin >> a;
    float res;
    res = (3.14 * a * a);
    cout<< "answer is :-"<< res;
}`
  },
  {
    id: "cpp_io_26",
    question: "Write a C++ program to find the area of a rectangle.",
    answer: ` //C++ Program to find area of rectangle
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int a,b,c;
    cout<<"enter length";
    cin>>a;
    cout<<"enter width";
    cin>>b;
    c=a*b;
    cout<<"answer is :-"<<c;
}`
  },
  {
    id: "cpp_io_27",
    question: "Write a C++ program to find the area of a triangle.",
    answer: `// C++ Program to find area of triangle
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int Area,base,height;
    cout<<"enter base";
    cin>>base;
    cout<<"enter height";
    cin>>height;
    Area = (base * height) / 2;
    cout<<"answer is :-"<<Area;
}`
  },
  {
    id: "cpp_io_28",
    question: "Write a C++ program to find the area of an equilateral triangle.",
    answer: `//C++ Program to find area of equilateral triangle
#include <iostream>
using namespace std;

int main() {
    float side, area;
    float root3 = 1.732;  

    cout << "Enter the side of the equilateral triangle: ";
    cin >> side;

    area = (root3 / 4) * side * side;

    cout << "Area of the equilateral triangle is: " << area << endl;

    return 0;
}`
  },
  {
    id: "cpp_io_29",
    question: "Write a C++ program to find the area of a rhombus.",
    answer: `//  C++ Program to find area of rhombus 
#include <iostream>
using namespace std;

int main() {
        int p,q;
        float area;
        cout<<"Enter diagonals: ";
        cin>>p;
        cin>>q;
     area = 0.5 * p * q;
     cout<<"area of rhombus is:- "<<area;

    }`
  },
  {
    id: "cpp_io_30",
    question: "Write a C++ program to find the area of a parallelogram.",
    answer: `//C++ Program to find area of parallelogram
#include <iostream>
using namespace std;

int main() 
{
    int height,base;
    float area;
    cout<<"enter height  ";
    cin>> height;
    cout<<"enter base    ";
    cin>>base;

    area=height*base;
    cout<<" area of parallelogram is -: "<<area;
}`
  },

  {
    id: "cpp_io_31",
    question: "Write a C++ program to find the lateral surface area and total surface area of a rectangular prism.",
    answer: `//C++ Program to find area of Prism

#include <iostream>
using namespace std;

int main()
{
    int l, w, h;
    float LSA, TSA, baseArea, perimeter;

    cout << "Enter length, width and height: ";
    cin >> l >> w >> h;

    baseArea = l * w;
    perimeter = 2 * (l + w);

    LSA = perimeter * h;
    TSA = LSA + 2 * baseArea;

    cout << "Lateral Surface Area: " << LSA << endl;
    cout << "Total Surface Area: " << TSA << endl;

    return 0;
}`
  },
  {
    id: "cpp_io_32",
    question: "Write a C++ program to find the volume of a sphere.",
    answer: `//C++ Program to find volume of sphere
#include <iostream>
using namespace std;

int main()
{
    float r, volume;
    cout << "Enter radius: ";
    cin >> r;
    volume = (4.0/3) * 3.14 * r * r * r;
    cout << "Volume of sphere is: " << volume;

    return 0;
}`
  },
  {
    id: "cpp_io_33",
    question: "Write a C++ program to find the volume of a cylinder.",
    answer: `//C++ Program to find volume of cylinder
#include <iostream>
using namespace std;

int main()
{
    float c,h,volume;

    cout << "Enter radius ";
    cin >> c;

    cout<<"Enter height ";
    cin>>h;

    volume=3.14*c*c*h;
    cout<<"volume of cylinder is:-  "<<volume;
}`
  },
  {
    id: "cpp_io_34",
    question: "Write a C++ program to find the volume of a cuboid.",
    answer: `//C++ Program to find volume of cuboid

#include <iostream>
using namespace std;

int main()
{
    int l,h,b;
    float volume;

    cout << "Enter lenth ";
    cin >> l;

    cout<<"Enter height ";
    cin>>h;

    cout<<"Enter breath";
    cin>>b;

    volume=l*h*b;
    cout<<"volume of cuboid is:-  "<<volume;
}`
  },
  {
    id: "cpp_io_35",
    question: "Write a C++ program to find the volume of a cone.",
    answer: `// C++ Program to find volume of cone
#include <iostream>

using namespace std;

int main()
{
    int r, h;
    float volume;
    cout << "enter radius";
    cin >> r;
    cout << "enter height";
    cin >> h;

    volume = (1.0 / 3) * 3.14 * r * r * h;
    
    cout<< "volume of cone is:-  " << volume;
}`
  },
  {
    id: "cpp_io_36",
    question: "Write a C++ program to find the surface area of a cuboid.",
    answer: `//C++ program to find surface area of cuboid

#include <iostream>
using namespace std;

int main()
{
    int l,h,b;
    float area;

    cout << "Enter lenth  ";
    cin >> l;

    cout<<"Enter height ";
    cin>>h;

    cout<<"Enter breath  ";
    cin>>b;

      area = 2 * (l*b + b*h + l*h);

    cout<<"area of cuboid is:-  "<<area;
}`
  },
  {
    id: "cpp_io_37",
    question: "Write a C++ program to find the surface area of a cylinder.",
    answer: `//C++ program to find surface area of cylinder
#include <iostream>
using namespace std;

int main()
{
    int r,h;
    float area;

    cout << "Enter radius ";
    cin >> r;

    cout<<"Enter height ";
    cin>>h;

    area=2*3.14*r*(r+h);
    cout<<"volume of cylinder is:-  "<<area;
}`
  },
  {
    id: "cpp_io_38",
    question: "Write a C++ program to find the surface area of a cube.",
    answer: `//C++ program to find surface area of cube
#include <iostream>
using namespace std;

int main()
{
    int a;
    float area;
    
    cout << "Enter side : ";
    cin >> a;

    area=6*a*a;

    cout<<"surface area of cube "<<area;
      
}`
  },
  {
    id: "cpp_io_39",
    question: "Write a C++ program to calculate the average marks of 5 subjects.",
    answer: `//C++ program to calculate average marks
#include <iostream>
using namespace std;

int main()
{
    float m1, m2, m3, m4, m5, average;

    cout << "Enter marks of 5 subjects: ";
    cin >> m1 >> m2 >> m3 >> m4 >> m5;

    average = (m1 + m2 + m3 + m4 + m5) / 5;

    cout << "Average marks = " << average;

    return 0;
}`
  },
  {
    id: "cpp_io_40",
    question: "Write a C++ program to check whether a given character is a vowel or consonant.",
    answer: `//C++ program to check vowel or consonant
#include <iostream>
using namespace std;

int main()
{
    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ||
       ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
    {
        cout << "It is a Vowel";
    }
    else
    {
        cout << "It is a Consonant";
    }

    return 0;
}`
  },
  {
    id: "cpp_io_41",
    question: "Write a C++ program to find the sum of first N natural numbers.",
    answer: `// C++ program to sum of N numbers

#include <iostream>
using namespace std;

int main()
{
    int n;
    float sum;

    cout << "Enter a number: ";
    cin >> n;

    sum = (n * (n + 1)) / 2.0;

    cout << "Sum = " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_42",
    question: "Write a C++ program to find the factorial of any given number.",
    answer: `// C++ program to find factorial of any number

#include <iostream>
using namespace std;

int main()
{
    int num, fact=1;

    cout << "Enter the Number: ";
    cin >> num;

    while (num > 0)
    {
        fact*=num;
        num--;
    }

    cout << "The factorial of the Number is: " << fact;

    return 0;
}`
  },
  {
    id: "cpp_io_43",
    question: "Write a C++ program to calculate electricity bill based on units consumed.",
    answer: `//C++ Program to calculate electricity bill
#include <iostream>
using namespace std;

int main()
{
    int units;
    float bill;

    cout << "Enter units: ";
    cin >> units;

    bill = units * 5;   

    cout << "Electricity Bill = " << bill;

    return 0;
}`
  },
  {
    id: "cpp_io_44",
    question: "Write a C++ program to calculate percentage from CGPA.",
    answer: `//C++ Program To Calculate CGPA Percentage
#include <iostream>
using namespace std;

int main()
{
    float cgpa, percentage;

    cout << "Enter CGPA: ";
    cin >> cgpa;

   
    percentage = cgpa * 10;

    cout << "Percentage = " << percentage;

    return 0;
}`
  },
  {
    id: "cpp_io_45",
    question: "Write a C++ program to calculate compound interest.",
    answer: `// C++ Program to calculate compound interest
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float principal, roi, time, n, total;

    cout << "Enter the following details: " << endl;
    cout << "Principal Amount: ";
    cin >> principal;
    cout << "Rate of interest(ROI): ";
    cin >> roi;
    cout << "Number of times interest is componded in 1 year: ";
    cin >> n;
    cout << "Time (in years): ";
    cin >> time;

    total = (principal * (pow((1 + ((roi / 100) / n)), (n * time))));

    cout << "Compunded Interest: " << (total-principal);
}`
  },
  {
    id: "cpp_io_46",
    question: "Write a C++ program to calculate the batting average of a cricket player.",
    answer: `// C++ Program To Calculate Batting Average
#include <iostream>
using namespace std;

int main()
{
    float runs, outs, average;

    cout << "Enter total runs: ";
    cin >> runs;

    cout << "Enter number of times out: ";
    cin >> outs;

    average = runs / outs;

    cout << "Batting Average = " << average;

    return 0;
}`
  },
  {
    id: "cpp_io_47",
    question: "Write a C++ program to calculate commission based on sales and commission rate.",
    answer: `//C++ Program to Calculate Commission Percentage
#include <iostream>
using namespace std;

int main()
{
    float sales, rate, commission;

    cout << "Enter total sales: ";
    cin >> sales;

    cout << "Enter commission rate (%): ";
    cin >> rate;

    commission = (sales * rate) / 100;

    cout << "Commission = " << commission;

    return 0;
}`
  },
  {
    id: "cpp_io_48",
    question: "Write a C++ program to find the distance between two points in 3D space.",
    answer: `// C++ Program To Find Distance Between Two Points

#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int x1, y1, z1, x2, y2, z2;
    float distance;

    cout << "Enter the First Point co-ordinates: " << endl;
    cout << "X-co-ordinate: ";
    cin >> x1;
    cout << "Y-co-ordinate: ";
    cin >> y1;
    cout << "Z-co-ordinate: ";
    cin >> z1;

    cout << "Enter the Second Point co-ordinates: " << endl;
    cout << "X-co-ordinate: ";
    cin >> x2;
    cout << "Y-co-ordinate: ";
    cin >> y2;
    cout << "Z-co-ordinate: ";
    cin >> z2;

    distance = sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) + ((z2 - z1) * (z2 - z1)));

    cout << "The distance between two points is: " << distance;

    return 0;
}`
  },
  {
    id: "cpp_io_49",
    question: "Write a C++ program to calculate the power of a number without using built-in functions.",
    answer: `//C++ Program To Calculate Power Of Number
#include <iostream>
using namespace std;

int main()
{
    int base, power;
    long long result = 1;

    cout << "Enter base: ";
    cin >> base;

    cout << "Enter power: ";
    cin >> power;

    for(int i = 1; i <= power; i++)
    {
        result *= base;
    }

    cout << "Result = " << result;

    return 0;
}`
  },
  {
    id: "cpp_io_50",
    question: "Write a C++ program to take three numbers from the user and print the greatest number.",
    answer: `//Write a C++ program to take three numbers from the user and print the greatest number
#include<iostream>
using namespace std;

int main()
{
    int a,b,c;
    cout<<"enter the three value";
    cin>>a;
    cin>>b;
    cin>>c;
    if(a>b&&a>c)
    {
         cout<<"greater is\n"<<a;
    }else if (b>a&&b>c)
    {
        cout<<"greater is"<<b;
    } else if(c>a&&c>b)
    {
        cout<<"greater is"<<c;
    }
    else cout<<"both values are same";
    

}`
  },
  {
    id: "cpp_io_51",
    question: "Write a C++ program to find the number of days in a month.",
    answer: `//Write a C++ program to find the number of days in a month
#include<iostream>

using namespace std;

int main()
{
    int a;
    cout<<"enter this month number";
    cin>>a;
    if(a==1||a==3||a==5||a==7||a==10||a==12)
    {
        cout<<"thirty one days in this month \n31";
    }
    else if(a==2)
    {
        cout<<" in this month 28/29 days" ;
    } else if(a==4||a==6||a==8||a==9||a==11)
    {
     cout<<"in this month thirty days \n30";
    }
    else cout<<"enter valid value";
}`
  },
  {
    id: "cpp_io_52",
    question: "Write a C++ program to test whether a number is positive or negative.",
    answer: `//Write a C++ program to test a number is positive or negative
#include<iostream>
using namespace std;

int main()
{
    int a;
    cout<<"enter the number";
    cin>>a;
    if (a>=0)
    {
        cout<<"this is a positive number";
    }
     else cout<<"this is a negative number";

    
}`
  },
  {
    id: "cpp_io_53",
    question: "Write a C++ program to accept a number of week's day (1-7) and print the name of the day.",
    answer: `//Write a C++ Program to accept number of week's day (1-7) and print name of the day

#include<iostream>

using namespace std;

int main()
{
    int day;
    cout<<"enter the day number ";
    cin>>day;
    switch (day)
    {
    case 1:
        cout<<"sunday";
        break;
     case 2:
        cout<<"monday";
        break;
         case 3:
        cout<<"tuesday";
        break;
         case 4:
        cout<<"wednesday";
        break;
         case 5:
        cout<<"thursday";
        break;
         case 6:
        cout<<"friday";
        break;
         case 7:
        cout<<"saturday";
        break;
    default: cout<<"enter the valid number";
        break;
    }
}`
  },
  {
    id: "cpp_io_54",
    question: "Write a C++ program that takes a year from the user and prints whether that year is a leap year or not.",
    answer: `//Write a C++ program that takes a year from user and print whether that year is a leap year or not
#include<iostream>
using namespace std;

int main()
{
    int a;
    cout<<"enter the year\n";
    cin>>a;

    if (a % 4 ==0)
    {    cout<<"this is a leap year";
    }
     else cout<<"this is not leap year";

    
}`
  },
  {
    id: "cpp_io_55",
    question: "Write a C++ program to input 5 numbers from keyboard and find their sum and average.",
    answer: `// Write a C++ program to input 5 numbers from keyboard and find their sum and average
#include<iostream>

using namespace std;
int main()
{
    cout<<"enter 5 inputs for sum the number and average";
int a,b,c,d,e;
int sum,average;
cin>>a;
cin>>b;
cin>>c;
cin>>d;
cin>>e;
sum=a+b+c+d+e;
average=sum/5;

cout<<"sum of number is:-  "<<sum<<endl;
cout<<"average number is:- "<<average;


}`
  },
  {
    id: "cpp_io_56",
    question: "Write a C++ program to display the first 5 natural numbers.",
    answer: `//Write a program in C++ to display the first 5 natural numbers
#include<iostream>

using namespace std;

int main()
{
    int a=1;
    cout<<"first five natural number";
    for (a; a <= 5; a++)
    {   
        cout<<a<<endl;
    }
    
}`
  },
  {
    id: "cpp_io_57",
    question: "Write a C++ program to check whether a character is a vowel or consonant.",
    answer: `// Write a C++ program to check vowel or consonant
#include <iostream>
using namespace std;

int main()
{
    char a;
    cout << "enter a character for check:- ";
    cin >> a;

    if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U')
    {
        cout << "this is vowel:-" << a;
    }
    else
        cout << "this is constant:-" << a;
}`
  },
  {
    id: "cpp_io_58",
    question: "Write a C++ program to display the cube of numbers up to a given integer.",
    answer: `//Write a C++ program to display the cube of the number upto given an integer
#include<iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the number";
    cin>>n;

    for(int i=1;i<=n;i++)
    {
        cout<<i<<"->"<<i*i*i<<endl;

    }
    return 0;
}`
  },
  {
    id: "cpp_io_59",
    question: "Write a C++ program to display the n terms of odd natural numbers and their sum.",
    answer: `//Write a C++ program to display the n terms of odd natural number and their sum
#include<iostream>

using namespace std;

int main()
{
    int n,r=0;
    cin>>n;

    for ( int i = 1; i <= n; i++)
    {
        int odd =2*i-1;
        cout<<odd<<""<<endl;
        r+=odd;
    }
    
 
    cout<<"\nsum"<<r;
    
}`
  },
  {
    id: "cpp_io_60",
    question: "Write a C++ program to display the multiplication table of a given integer.",
    answer: `//Write a C++ program to display the multiplication table of a given integer
#include<iostream>

using namespace std;

int main()
{
   int number;
   cout<<"enter number";
   cin>>number;
   cout<<"table:-";
   for (int i = 0; i <=10; i++)
   {
     int table=number*i;
     cout<<table<<endl;
   }
    
}`
  },
  {
    id: "cpp_io_61",
    question: "Write a C++ program that reads an integer and checks whether it is negative, zero, or positive.",
    answer: `//Write a C++ program that reads an integer and check whether it is negative, zero, or positive
#include<iostream>
using namespace std;

int main()
{
    int a;
    cout<<"enter the valid number";
    cin>>a;
    if (a<=-1)
    {
        cout<<"this is nagative number";
    } else if (a==0)
    {
        cout<<"this is zero";
    }
    else if (a>=1)
    {cout<<"this is positive number";}
    
}`
  },
  {
    id: "cpp_io_62",
    question: "Write a C++ program that reads a positive integer and counts the number of digits in it.",
    answer: `//Write a C++ program that reads an positive integer and count the number of digits
#include <iostream>
using namespace std;

int main() {
    long long num;
    int count = 0;

    cout << "Enter a positive integer: ";
    cin >> num;

    if (num == 0) {
        count = 1;
    } else {
        while (num > 0) {
            num = num / 10;
            count++;
        }
    }

    cout << "Number of digits: " << count << endl;

    return 0;
}`
  },
  {
    id: "cpp_io_63",
    question: "Write a C++ program that accepts three numbers and checks whether all numbers are equal or not.",
    answer: `//. Write a C++ program that accepts three numbers and check All numbers are equal or not

#include<iostream>

using namespace std;
int main()
{
    int a,b,c;
    cout<<"enter three numbers";
    cin>>a;
    cin>>b;
    cin>>c;
    if(a==b&&b==c)
    {
        cout<<"all three values are equal";

    }
    else  cout<<"these are not same";
}`
  },
  {
    id: "cpp_io_64",
    question: "Write a C++ program that accepts three numbers and checks if they are in increasing or decreasing order.",
    answer: `//. Write a C++ program that accepts three numbers from the user and check if numbers are in "increasing" or "decreasing" order.
#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    if (a < b && b < c) {
        cout << "Increasing order" << endl;
    }
    else if (a > b && b > c) {
        cout << "Decreasing order" << endl;
    }
    else {
        cout << "Neither increasing nor decreasing" << endl;
    }

    return 0;
}`
  },
  {
    id: "cpp_io_65",
    question: "Write a C++ program that determines a student's grade based on marks (81-100: A, 61-80: B, 41-60: C, 0-40: D).",
    answer: `// Write a C++ program that determines a student's grade (81-100 : A, 61-80 : B, 41-60 : C, 0-40 : D)
#include <iostream>

using namespace std;
int main()
{
    float res;

    cout << "enter marks: ";
    cin >> res;

    if (res >= 81 && res <= 100)
    {
        cout << "student grade is:- A";
    }

    else if (res >= 61 && res <= 80)
    {
        cout << "student grade is:- B";
    }

    else if (res >= 41 && res <= 60)
    {
        cout << "student grade is:- C";
    }

    else if (res >= 0 && res <= 40)
    {
        cout << "student grade is:- D";
    }

    else
        cout << "enter valid marks";
}`
  },
  {
    id: "cpp_io_66",
    question: "Write a C++ program to create a simple calculator with operations: Addition, Subtraction, Multiplication, Division, Exponential, Percentage, and Exit.",
    answer: `//Write a C++ program to create a simple calculator (1. ADDITION, 2. SUBTRACTION, 3. MULTIPLICATION, 4. DIVISION, 5. EXPONENTIAL, 6. PERCENTAGE, 7. EXIT)
#include <iostream>
#include <cmath>   
using namespace std;

int main()
{
    int choice;
    double u, e;

    cout << "Enter integer values for task perform\n";
    cout << "Press 1 for addition\n";
    cout << "Press 2 for subtraction\n";
    cout << "Press 3 for multiplication\n";
    cout << "Press 4 for division\n";
    cout << "Press 5 for exponential\n";
    cout << "Press 6 for percentage\n";
    cout << "Press 7 for exit\n";

    cin >> choice;

    if (choice == 7) {
        cout << "Exit";
        return 0;
    }

    cout << "Enter two numbers:\n";
    cin >> u >> e;

    switch (choice)
    {
        case 1:
            cout << "Addition is: " << u + e;
            break;

        case 2:
            cout << "Subtraction is: " << u - e;
            break;

        case 3:
            cout << "Multiplication is: " << u * e;
            break;

        case 4:
            if (e != 0)
                cout << "Division is: " << u / e;
            else
                cout << "Error! Division by zero";
            break;

        case 5:
            cout << "Exponential is: " << pow(u, e);
            break;

        case 6:
            cout << "Percentage is: " << (u / e) * 100;
            break;

        case 7:
            cout << "Exit";
            break;

        default:
            cout << "Invalid choice";
    }

    return 0;
}`
  },
  {
    id: "cpp_io_67",
    question: "Write a C++ program to concatenate two strings.",
    answer: `// Write a C++ program to concatenate two string
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str1, str2, result;

    cout << "Enter first string: ";
    getline(cin, str1);

    cout << "Enter second string: ";
    getline(cin, str2);

    result = str1 + str2;   // Concatenation

    cout << "Concatenated string: " << result;

    return 0;
}`
  },
  {
    id: "cpp_io_68",
    question: "Write a C++ program to convert all characters in a string to lowercase.",
    answer: `//Write a C++ program to convert all characters in a string to lowercase

#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str;

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;   
        }
    }

    cout << "Lowercase string: " << str;

    return 0;
}`
  },
  {
    id: "cpp_io_69",
    question: "Write a C++ program to convert all characters in a string to uppercase.",
    answer: `// Write a C++ program to convert all characters in a string to uppercase
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str;

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;   
        }
    }

    cout << "uppercase string: " << str;

    return 0;
}`
  },
  {
    id: "cpp_io_70",
    question: "Write a C++ program to trim a string by removing all whitespaces.",
    answer: `// Write a C++ program to trim a string (remove whitespaces)
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int len, j = 0;
    int newsize;

    cout << "Enter the string you like: ";
    gets(str1);
    len = strlen(str1);

    for (int i = 0; i < len; i++, j++)
    {
        if (str1[i] != 32 && str1[i] != 9 && str1[i] != 10)
        {
            str2[j] = str1[i];
        }
        else
        {
            j--;
        }
    }

    str2[j] = '\0';

    strcpy(str1, str2);

    cout << "Modified string with white space removed: " << str1;

    return 0;
}`
  },
{
    id: "cpp_io_71",
    question: "Write a C++ program to get a substring of a given string between two specified positions.",
    answer: `// Write a C++ program to get a substring of a given string between two specified positions
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int start, end, i, j;

    cout << "Enter the string you like: ";
    gets(str1);

    cout << "Enter the staring point: ";
    cin >> start;
    start -= 1;
    cout << "Enter the Ending point: ";
    cin >> end;
    end -= 1;

    for (i = start, j = 0; i <= end; i++, j++)
    {
        str2[j] = str1[i];
    }

    str2[j] = '\\0';

    cout << "Here is  the sub-string : " << str2;

    return 0;
}`
  },
  {
    id: "cpp_io_72",
    question: "Write a C++ program to replace all the 'd' characters with 'f' characters in a string.",
    answer: `// Write a C++ program to replace all the 'd' characters with 'f' characters
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int len, i = 0;
    int newsize;

    cout << "Enter the string you like: ";
    gets(str1);
    len = strlen(str1);

    for (i = 0; i < len; i++)
    {
        if (str1[i] != 'd')
        {
            str2[i] = str1[i];
        }
        else
        {
            str2[i] = 'f';
        }
    }

    str2[i] = '\\0';

    cout << "Modified string with white space removed: " << str2;

    return 0;
}`
  },
  {
    id: "cpp_io_73",
    question: "Write a C++ program to get the length of a given string.",
    answer: `// Write a C++ program to get the length of a given string
#include<iostream>
#include<string>
#include <cstring>
using namespace std;

int main()
{
    char a[10];
    cout<<"enter the number";
    cin>>a;
    int b=strlen(a);
    cout<<"length is :-"<<b;
}`
  },
  {
    id: "cpp_io_74",
    question: "Write a C++ program to print the current date and time in DD-MM-YYYY HH:MM:SS format.",
    answer: `// Write a C++ program to print current date and time in the specified format
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t currentTime = time(0);

    // Convert to local time structure
    tm *localTime = localtime(&currentTime);

    char buffer[100];

    // Format: DD-MM-YYYY HH:MM:SS
    strftime(buffer, sizeof(buffer), "%d-%m-%Y %H:%M:%S", localTime);

    cout << "Current system time is: " << buffer << endl;

    return 0;
}`
  },
  {
    id: "cpp_io_75",
    question: "Write a C++ program to get the character at a given index within a string.",
    answer: `// Write a C++ program to get the character at the given index within the String


    #include <iostream>
using namespace std;

int main() {
    string s;
    int i;
    cout<<"enter valid number:-";
    cin >> s >> i;
    
    cout<<"character at index:-" << s[i];
    return 0;
}`
  },
  {
    id: "cpp_io_76",
    question: "Write a C++ program to remove a particular character from a string.",
    answer: `// Write a C++ program to remove a particular character from a string
#include <iostream>
using namespace std;

int main() {
    string s;
    char ch;

    getline(cin, s); 
    cin >> ch;       

    string result = "";
    for (char c : s) {
        if (c != ch) result += c;
    }

    cout << result;
    return 0;
}`
  },
  {
    id: "cpp_io_77",
    question: "Write a C++ program to reverse a string.",
    answer: `//Write a C++ program to reverse a String
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int n = str.length();

    for (int i = n - 1; i >= 0; i--) {
        cout << str[i];
    }

    return 0;
}`
  },
  {
    id: "cpp_io_78",
    question: "Write a C++ program to remove HTML tags from a string.",
    answer: `// Write a C++ program to remove html tags from a string
#include <iostream>
#include <string>
using namespace std;

int main() {
    string html, result = "";
    cout << "Enter HTML string: ";
    getline(cin, html);

    int flag = 0;  

    for (char ch : html) {
        if (ch == '<') {
            flag = 1;
        }
        else if (ch == '>') {
            flag = 0;
        }
        else if (flag == 0) {
            result += ch;
        }
    }

    cout << "Text without HTML tags: " << result;
    return 0;
}`
  },
  {
    id: "cpp_io_79",
    question: "Write a C++ program to count the total number of lines in a string.",
    answer: `// Write a C++ program to count total number of lines from a string
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str[100] = "";
    int lines = 1;

    cout << "Enter text (use ~ to stop): ";

    cin.get(str, 100, '~');  // allows multiline input

    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] == '\\n')
        {
            lines++;
        }
    }

    cout << "Total lines = " << lines;

    return 0;
}`
  },
  {
    id: "cpp_io_80",
    question: "Write a C++ program to accept the marks of a student in 6 subjects and find total marks and percentage.",
    answer: `// Write a C++ Program to Accept the Marks of a Student and find Total Marks and Percentage
#include <iostream>

using namespace std;
int main()
{
    int hi, eco, po, ph, ch, eng;
    int total;
    float percentage;
    cout << "enter marks for total or percentage:-";
    cin >> hi;
    cin >> eco;
    cin >> po;
    cin >> ph;
    cin >> ch;
    cin >> eng;
    total = hi + eco + po + ph + ch + eng;

    percentage = (total / 600.0) * 100;

    cout << "total=" << total << "\\npercentage=" << percentage;
}`
  },
  {
    id: "cpp_io_81",
    question: "Write a C++ program to print numbers from 1 to 10 using a loop.",
    answer: `//Write a C++ program to print numbers from 1 to 10 using loop
#include<iostream>

using namespace std;

int main()
{
    for (int i = 1; i <=10; i++)
    {
        cout<<i<<endl;
    }
    
}`
  },
  {
    id: "cpp_io_82",
    question: "Write a C++ program to calculate the sum of the first 10 natural numbers using a loop.",
    answer: `//Write a C++ program to calculate the sum of first 10 natural number using loop
#include <iostream>
using namespace std;

int main()
{
    int sum = 0;

    for(int i = 1; i <= 10; i++)
    {
        sum = sum + i;
    }

    cout << "Sum = " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_83",
    question: "Write a C++ program to print the multiplication table of a given number.",
    answer: `// Write a C++ program to print multiplication table of given number
#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    for(int i = 1; i <= 10; i++)
    {
        cout << n << " x " << i << " = " << n*i << endl;
    }

    return 0;
}`
  },
  {
    id: "cpp_io_84",
    question: "Write a C++ program to find the factorial value of any number entered through the keyboard using a loop.",
    answer: `//Write a C++ program to find the factorial value of any number entered through the keyboard
#include <iostream>
using namespace std;

int main()
{
    int n;
    long long fact = 1;

    cout << "Enter number: ";
    cin >> n;

    for(int i = 1; i <= n; i++)
    {
        fact = fact * i;
    }

    cout << "Factorial = " << fact;

    return 0;
}`
  },
  {
    id: "cpp_io_85",
    question: "Write a C++ program that prompts the user to input an integer and then outputs the number with the digits in reversed order.",
    answer: `// Write a C++ program that prompts the user to input an integer and then outputs the number with the digits reversed order
#include <iostream>
using namespace std;

int main()
{
    int n, rev = 0, digit;

    cout << "Enter number: ";
    cin >> n;

    while (n > 0)
    {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = n / 10;
    }

    cout << "Reversed number = " << rev;

    return 0;
}`
  },
  {
    id: "cpp_io_86",
    question: "Write a C++ program that reads a set of integers and then prints the sum of the even and odd integers using a loop.",
    answer: `//Write a C++ program that reads a set of integers, and then prints the sum of the even and odd integers using loop
#include <iostream>
using namespace std;

int main() {
    int n, num;
    int evenSum = 0, oddSum = 0;

    cout << "Enter how many numbers you want to input: ";
    cin >> n;

    for(int i = 1; i <= n; i++) {
        cout << "Enter number " << i << ": ";
        cin >> num;

        if(num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    cout << "\\nSum of Even numbers = " << evenSum;
    cout << "\\nSum of Odd numbers = " << oddSum;

    return 0;
}`
  },
  {
    id: "cpp_io_87",
    question: "Write a C++ program to check whether a number is a prime number or not.",
    answer: `//Write a C++ program to check whether the number is a prime number or not
#include <iostream>
using namespace std;

int main() {
    int num, i, flag = 0;

    cout << "Enter a number: ";
    cin >> num;

    if(num <= 1) {
        cout << num << " is NOT a Prime Number";
    } 
    else {
        for(i = 2; i <= num / 2; i++) {
            if(num % i == 0) {
                flag = 1;
                break;
            }
        }

        if(flag == 0)
            cout << num << " is a Prime Number";
        else
            cout << num << " is NOT a Prime Number";
    }

    return 0;
}`
  },
  {
    id: "cpp_io_88",
    question: "Write a C++ program to calculate the HCF of two given numbers using a loop.",
    answer: `//Write a C++ program to calculate HCF of Two given numbers using loop
#include <iostream>
using namespace std;

int main() {
    int num1, num2, i, hcf;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

   int min = (num1 < num2) ? num1 : num2;

    for(i = 1; i <= min; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }

    cout << "HCF = " << hcf;

    return 0;
}`
  },
  {
    id: "cpp_io_89",
    question: "Write a C++ program to enter numbers till the user wants and at the end display the count of positive numbers, negative numbers, and zeros.",
    answer: `//Write a C++ program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros
#include <iostream>
using namespace std;

int main() {
    int num;
    int positive = 0, negative = 0, zero = 0;
    char choice;

    do {
        cout << "Enter a number: ";
        cin >> num;

        if(num > 0)
            positive++;
        else if(num < 0)
            negative++;
        else
            zero++;

        cout << "Do you want to continue? (y/n): ";
        cin >> choice;

    } while(choice == 'y' || choice == 'Y');

    cout << "\\nPositive numbers = " << positive;
    cout << "\\nNegative numbers = " << negative;
    cout << "\\nZeros = " << zero;

    return 0;
}`
  },
  {
    id: "cpp_io_90",
    question: "Write a C++ program to enter numbers till the user wants and at the end display the largest and smallest numbers entered.",
    answer: `//Write a C++ program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered
#include <iostream>
using namespace std;

int main() {
    int num;
    int largest, smallest;
    char choice;

 
    cout << "Enter a number: ";
    cin >> num;

    largest = smallest = num;

    do {
        if(num > largest)
            largest = num;

        if(num < smallest)
            smallest = num;

        cout << "Do you want to continue? (y/n): ";
        cin >> choice;

        if(choice == 'y' || choice == 'Y') {
            cout << "Enter a number: ";
            cin >> num;
        }

    } while(choice == 'y' || choice == 'Y');

    cout << "\\nLargest number = " << largest;
    cout << "\\nSmallest number = " << smallest;

    return 0;
}`
  },
  {
    id: "cpp_io_91",
    question: "Write a C++ program to print out all Armstrong numbers between 1 to 600 using a loop.",
    answer: `//Write a C++ program to print out all Armstrong numbers between 1 to 600 using loop
#include <iostream>
using namespace std;

int main() {
    int num, orl, remainder, result;

    cout << "Armstrong numbers between 1 to 600 are:\\n";

    for(num = 1; num <= 600; num++) {
        orl = num;
        result = 0;

        while(orl != 0) {
            remainder = orl % 10;
            result += remainder * remainder * remainder;
            orl /= 10;
        }

        if(result == num) {
            cout << num << " ";
        }
    }

    return 0;
}`
  },
  {
    id: "cpp_io_92",
    question: "Write a C++ program to count the total number of notes in an entered amount using a loop.",
    answer: `//Write a C++ program to count total number of notes in entered amount using loop
#include <iostream>
using namespace std;

int main() {
    int amount;
    cout << "Enter amount: ";
    cin >> amount;

    int notes[] = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    int size = 10;

    for(int i = 0; i < size; i++) {
        int count = amount / notes[i];

        if(count > 0) {
            cout << "Notes of " << notes[i] << " = " << count << endl;
            amount = amount % notes[i];
        }
    }

    return 0;
}`
  },
  {
    id: "cpp_io_93",
    question: "Write a C++ program to print Fibonacci series of n terms where n is input by the user using a loop.",
    answer: `// Write a C++ program to print Fibonacci series of n terms where n is input by user using loop
#include <iostream>
using namespace std;

int main()
{
    int i, x = 0, y = 1, j;

    cout << "How many number you want in this series: ";
    cin >> j;
    cout << x << " " << y << " ";
    for (i = 0; i <= j - 3; i++)
    {
        y = x + y;
        cout << y << " ";
        x = y - x;
    }
}`
  },
  {
    id: "cpp_io_94",
    question: "Write a C++ program to calculate the sum of series 1+2+3+...+n where n is input by the user.",
    answer: `//Write a C++ program to calculate the sum of following series where n is input by user
#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;

    cout << "Enter n: ";
    cin >> n;

    for(int i = 1; i <= n; i++) {
        sum = sum + i;
    }

    cout << "Sum = " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_95",
    question: "Write a C++ method to compute the average of three numbers.",
    answer: `//Write a C++ method to compute the average of three numbers
#include<iostream>
using namespace std;
int main()
{
    int a,v,c;
    float ave,avee;
    cout<<"enter the numbers ";
     cin>>a;
     cin>>v;
     cin>>c;

     ave=a+v+c;
     avee=ave/3;
     cout<<"average is :-"<<avee;


}`
  },
  {
    id: "cpp_io_96",
    question: "Write a C++ method to find the smallest number among three numbers.",
    answer: `// Write a C++ method to find the smallest number among three numbers
#include <iostream>
using namespace std;
int main()
{
    int a, b, c;
    cout << "Enter valid values  ";
    cin >> a;
    cin >> b;
    cin >> c;
    if (a < b && a < c)
    {
        cout << "your first number is smallest  " << a;
    }
    else if (b < a && b < c)
    {
        cout << "your second number is smallest  " << b;
    }
    else if (c < b && c < a)
    {
        cout << "your third number is smallest  " << c;
    }
    else
        cout << "any both values are same";
}`
  },
  {
    id: "cpp_io_97",
    question: "Write a C++ method to check whether a year entered by the user is a leap year or not.",
    answer: `// Write a C++ method to check whether an year entered by the user is a leap year or not
#include <iostream>
using namespace std;

int main()
{
    int a;
    cout << "enter the year\\n";
    cin >> a;

    if (((a % 4 == 0) && (a & 100 != 0)) || ((a % 4 == 0) && (a % 100 == 0) && (a % 400 == 0)))
    {
        cout << "this is a leap year";
    }
    else
        cout << "this is not leap year";
}`
  },
  {
    id: "cpp_io_98",
    question: "Write a C++ program to accept a float value and return a rounded float value.",
    answer: `// Write a C++ program to accept a float value of number and return a rounded float value
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;

    cout << "Enter the float value: ";
    cin >> num;

    num = roundf(num);

    cout << endl
         << "Here s your rounded float value: " << num;
}`
  },
  {
    id: "cpp_io_99",
    question: "Write a C++ method to compute the sum of the digits in an integer.",
    answer: `//Write a C++ method to compute the sum of the digits in an integer
#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;

    cout << "Enter an integer: ";
    cin >> num;

   if(num<0)
   num=-num;

    while (num > 0) {
        sum = sum + (num % 10); 
        num = num / 10;         
    }

    cout << "Sum of digits = " << sum;

    return 0;
}`
  },
  {
    id: "cpp_io_100",
    question: "Write a C++ method to calculate the area of a triangle.",
    answer: `// Write a C++ method to calculate the area of a triangle
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int Area, base, height;
    cout << "enter base";
    cin >> base;
    cout << "enter height";
    cin >> height;
    Area = (base * height) / 2;
    cout << "answer is :-" << Area;
}`
  },
  {
    id: "cpp_io_101",
    question: "Write a C++ method to find the area of a pentagon.",
    answer: `//Write a C++ method to find the area of a pentagon
#include <iostream>
using namespace std;

// Method to calculate area of regular pentagon
float areaPentagon(float side) {
    return 1.720 * side * side;
}

int main() {
    float s;

    cout << "Enter side of pentagon: ";
    cin >> s;

    cout << "Area of pentagon = " << areaPentagon(s);

    return 0;
}`
  },
  {
    id: "cpp_io_102",
    question: "Write a C++ method to find whether a number is even or not.",
    answer: `//. Write a C++ method to find number is even number or not
#include <iostream>
using namespace std;

int Even(int num) {
    if(num % 2 == 0)
        return true;
    else
        return false;
}

int main() {
    int n;

    cout << "Enter a number: ";
    cin >> n;

    if(Even(n))
        cout << "Even Number";
    else
        cout << "Odd Number";

    return 0;
}`
  },
  {
    id: "cpp_io_103",
    question: "Write a C++ method to check whether a number is a palindrome or not.",
    answer: `// Write a C++ method to check numbers is palindrome number or not
#include <iostream>
using namespace std;

int main()
{
    int num;
    int isPallindrome;

    cout << "Enter the Number you like: ";
    cin >> num;

    string number;
    string check;

    int length;
    number = to_string(num);

    length = number.length();

    for (int i = 0; i < length; i++)
    {
        isPallindrome = 1;
        if (number[i] != number[length - 1 - i])
        {
            isPallindrome = 0;
            break;
        }
    }

    if (isPallindrome == 1)
    {
        cout << "The Number Entered is a Pallindrome" << endl;
    }
    else
    {
        cout << "The Number Entered is not Pallindrome" << endl;
    }
}`
  },
  {
    id: "cpp_io_104",
    question: "Write a C++ method to display prime numbers between 1 to 20.",
    answer: `// Write a C++ method to displays prime numbers between 1 to 20
#include <iostream>
using namespace std;

int main()
{
    int isPrime;
    int i = 2;

    cout << "All prime numbers between 1 to 20 are: ";

    while (i < 21)
    {
        isPrime = 1;

        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
            }
        }

        if (isPrime == 1)
        {
            cout << i << " ";
        }
        i++;
    }
}`
  },
  {
    id: "cpp_io_105",
    question: "Write a C++ method to find GCD and LCM of two numbers.",
    answer: `// Write a C++ method to find GCD and LCM of Two Numbers
#include <iostream>
using namespace std;

int main()
{
    int num1, num2;
    int larger, smaller, rem;

    cout << "Enter 1st number: ";
    cin >> num1;
    cout << "Enter 2nd number: ";
    cin >> num2;

    if (num1 == num2)
    {
        cout << endl
             << "HCF: " << num1;
        cout << endl
             << "LCM: " << num2;
        return 0;
    }
    else
    {
        if (num1 > num2)
        {
            larger = num1;
            smaller = num2;
        }
        else
        {
            larger = num2;
            smaller = num1;
        }
    }

    while (larger % smaller != 0)
    {
        rem = larger % smaller;
        larger = smaller;
        smaller = rem;
    }

    if (larger % smaller == 0)
    {
        rem = smaller;
    }

    cout << endl
         << "HCF: " << rem;
    cout << endl
         << "LCM: " << ((num1 * num2) / rem);
    return 0;
}`
  },
  {
    id: "cpp_io_106",
    question: "Write a C++ method to find factorial using recursion.",
    answer: `// Write a C++ method to find factorial using recursion
#include <iostream>
using namespace std;

int factorial();
int num = 0, fact;

int main()
{
    cout << "Enter the number: ";
    cin >> num;
    fact = num;
    cout << "Factorial: " << factorial();
}

int factorial()
{

    if (num <= 1)
    {
        return fact;
    }
    else
    {
        num--;
        fact *= num;
    }

    if (num > 0)
    {
        factorial();
    }
}`
  },
  {
    id: "cpp_io_107",
    question: "Write a C++ program to reverse an integer number.",
    answer: `// Write a C++ program to reverse an integer number
#include <iostream>
using namespace std;

int main()
{
    int num, i;
    int isPallindrome;
    int length;

    cout << "Enter the Integer you like: ";
    cin >> num;

    string number;
    number = to_string(num);
    length = number.length();

    char reverse[length];

    for (i = 0; i < length; i++)
    {
        reverse[length - 1 - i] = number[i];
    }
    reverse[i] = '\\0';
    cout << "Integer reversed: " << reverse;
}`
  },
  {
    id: "cpp_io_108",
    question: "Write a C++ program to round a float number to a specified number of decimal places.",
    answer: `// Write a C++ program to round a float number to specified decimals
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;
    int specify;

    cout << "Enter the float value: ";
    cin >> num;
    cout << "Enter the decimal space to which you want to round it: ";
    cin >> specify;

    num = num * (pow(10, specify));//times 10 to power specify
    num = roundf(num);//round
    num = num / (pow(10, specify));//divides 10 to power specify

    cout << endl
         << "Here s your rounded float value: " << num;
}`
  },
  {
    id: "cpp_io_109",
    question: "Write a C++ program to test if a double number is an integer.",
    answer: `// Write a C++ program to test if a double number is an integer
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    double num;
    int num2;

    cout << "Enter the double value: ";
    cin >> num;

    num2 = (int)num;

    if (num2 == num)
    {
        cout << "Double number is an integer";
    }
    else
    {
        cout << "Double number is not an integer";
    }

    return 0;
}`
  },
  {
    id: "cpp_io_110",
    question: "Write a C++ program to round up the result of integer division.",
    answer: `// Write a C++ program to round up the result of integer division
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float division;
    int nume, denom;

    cout << "Enter the Numerator value: ";
    cin >> nume;
    cout << "Enter the denominator value: ";
    cin >> denom;

    division = ((float)nume) / denom;
    division = division * (pow(10, 2)); // times 10 to power 2
    division = roundf(division);
    division = division / (pow(10, 2));

    cout << "round up the result of integer division: " << division;

    return 0;
}`
  },
  {
    id: "cpp_io_111",
    question: "Write a C++ program to convert a Roman number to an integer number.",
    answer: `// Write a C++ program to convert Roman number to an integer number
#include <iostream>
#include <string.h>
using namespace std;

int switchcase(char roman)
{
    switch (roman)
    {
    case 'I':
        return 1;
        break;
    case 'V':
        return 5;
        break;
    case 'X':
        return 10;
        break;
    case 'L':
        return 50;
        break;
    case 'C':
        return 100;
        break;
    case 'D':
        return 500;
        break;
    case 'M':
        return 1000;
        break;
    default:
        return 0;
        break;
    }
}

int main()
{
    int result = 0;
    int cur_value, prev_value;
    char num[15];
    int size;

    cout << "Enter the Roman nummber(everything in capitals only): ";
    cin >> num;

    size = strlen(num);

    for (int i = 0; i < size; i++)
    {
        if (i == 0)
        {
            prev_value = 0;
        }
        else
        {
            prev_value = switchcase(num[size - i]);
        }
        cur_value = switchcase(num[size - i - 1]);
        if (cur_value < prev_value)
        {
            result -= cur_value;
        }
        else
        {
            result += cur_value;
        }
    }

    cout << "Integer Eqivalent for the Roman number is : " << result;
}`
  },
  {
    id: "cpp_io_112",
    question: "Write a C++ program to convert a float value to its absolute value.",
    answer: `// Write a C++ program to convert a float value to absolute value
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;

    cout << "Enter the float value: ";
    cin >> num;

    if (num < 0)
    {
        num *= -1;
    }

    cout << "Absolute equivalent of the float number: " << num;

    return 0;
}`
  },
  {
    id: "cpp_io_113",
    question: "Create a C++ class that accepts command line arguments from the user and displays all the arguments as output.",
    answer: `// Create a class entering the command line arguments from the user and show all the arguments as output.
#include <iostream>
#include <cstring>
using namespace std;

class arguments
{
private:
    char arg[50];

public:
    void setstr(char *arg1)
    {
        strcpy(arg, arg1);
    }

    char *getstr()
    {
        return arg;
    }
};

int main(int argc, char *argv[])
{
    arguments *arg;
    for (int i = 1; i < argc; i++)
    {
        arg = new (arguments);
        arg->setstr(argv[i]);
        cout << "Argument " << i << " : " << arg->getstr() << endl;
        delete arg;
    }
}`
  }  
],

  "INHERITANCE": [

    {
      id: "cpp_inherit_1",
      question: "Create a class Animal with method makeSound(). Derive Cat and override the method.",
      answer: `#include <iostream>
using namespace std;

class Animal{
public:
    virtual void MakeSound(){
        cout<<"Making Animal Sound";
    }
};

class Cat:public Animal{
public:
    void MakeSound(){
        cout<<"Meow";
    }
};

int main(){
    Cat obj;    
    obj.MakeSound();
}`
    },

    {
      id: "cpp_inherit_2",
      question: "Create a class Vehicle with method drive(). Derive Car and override drive().",
      answer: `#include <iostream>
using namespace std;

class Vehicle{
public:
    virtual void Drive(){
        cout<<"Driving";
    }
};

class Car:public Vehicle{
public:
    void Drive(){
        cout<<"Driving a car";
    }
};

int main(){
    Car obj;    
    obj.Drive();
}`
    },

    {
      id: "cpp_inherit_3",
      question: "Create Shape class and derive Rectangle to calculate area.",
      answer: `#include <iostream>
using namespace std;

class Shape{
public:
    virtual void getArea(){
        cout<<"Prints the area";
    }
};

class Rectangle:public Shape{
public:
    int x , y;
    Rectangle(){
        x=100;
        y=50;
    }
    void getArea(){
        cout<<"Area is "<<x*y;
    }
};

int main(){
    Rectangle obj;
    obj.getArea();
}`
    },

    {
      id: "cpp_inherit_4",
      question: "Create Employee class and derive HRManager with extra method addEmployee().",
      answer: `#include <iostream>
using namespace std;

class Employee{
public:
    virtual void work(){
        cout<<"Employee working"<<endl;
    }
};

class HRManager:public Employee{
public:
    void work(){
        cout<<"Managing HR tasks"<<endl;
    }

    void addEmployee(string name,string role){
        cout<<"Welcome "<<name<<" as "<<role;
    }
};

int main(){
    HRManager obj;
    obj.work();
    obj.addEmployee("Dhruv","Developer");
}`
    },

    {
      id: "cpp_inherit_5",
      question: "Create BankAccount and derive SavingsAccount to restrict withdrawal.",
      answer: `#include <iostream>
using namespace std;

class BankAccount{
protected:
    float Balance = 0;
public:
    void deposit(float Amount){
        Balance += Amount;
    }

    virtual void withdraw(float w){
        if(Balance>w)
            Balance -= w;
    }
};

class SavingsAccount: public BankAccount{
public:
    void withdraw(float w){
        if(Balance-w<100)
            cout<<"Denied";
        else
            Balance -= w;
    }
};

int main(){
    SavingsAccount obj;
    obj.deposit(1000);
    obj.withdraw(950);
}`
    },

    {
      id: "cpp_inherit_6",
      question: "Create Animal class with move() and derive Cheetah.",
      answer: `#include <iostream>
using namespace std;

class Animal{
public:
    virtual void Move(){
        cout<<"Animal is moving";
    }
};

class Cheetah:public Animal{
public:
    void Move(){
        cout<<"Cheetah is running";
    }
};

int main(){
    Cheetah obj;
    obj.Move();
}`
    },

    {
      id: "cpp_inherit_7",
      question: "Create Person class and derive Employee with additional details.",
      answer: `#include <iostream>
#include <string>
using namespace std;

class Person{
protected:
    string First, Last;
public:
    void SetName(string f, string l){
        First = f;
        Last = l;
    }
};

class Employee : public Person{
    int empId;
public:
    void setEmployee(int id){
        empId = id;
    }
};

int main(){
    Employee obj;
    obj.SetName("Dhruv","Goyal");
    obj.setEmployee(101);
}`
    },

    {
      id: "cpp_inherit_8",
      question: "Create Shape class and derive Circle to calculate area.",
      answer: `#include <iostream>
using namespace std;

class Shape{
public:
    virtual float GetArea(){ return 0; }
};

class Circle:public Shape{
    float radius;
public:
    void setRadius(float r){ radius=r; }

    float GetArea(){
        return 3.14 * radius * radius;
    }
};

int main(){
    Circle obj;
    obj.setRadius(5);
    cout<<obj.GetArea();
}`
    },

    {
      id: "cpp_inherit_9",
      question: "Create Vehicle hierarchy with Truck, Car.",
      answer: `#include <iostream>
using namespace std;

class Vehicle{
public:
    virtual float speed(){ return 0; }
};

class Truck: public Vehicle{
public:
    float speed(){ return 80; }
};

class Car: public Vehicle{
public:
    float speed(){ return 120; }
};

int main(){
    Truck t;
    cout<<t.speed();
}`
    },

    {
      id: "cpp_inherit_10",
      question: "Create Employee hierarchy with Manager.",
      answer: `#include<iostream>
using namespace std;

class Employee{
protected:
    string Name;
public:
    Employee(string n){ Name=n; }
};

class Manager: public Employee{
public:
    Manager(string n):Employee(n){}
};

int main(){
    Manager m("Dhruv");
}`
    }

  ],

 "DATA CONVERSION":[

{
id:"cpp_conv_1",
question:"Convert String to int",
answer:`// C++ Program to convert String to int
#include <iostream>
#include <fstream>
using namespace std;
int main(){
    fstream f("data.txt",ios::out); 
    string str;
    cout<<"Enter the string: ";
    getline(cin,str);
    f<<str;
    f.close();
    fstream file("data.txt",ios::in);
    unsigned int num;
     cout<<endl;
    while(file){
    file>>num;
    cout<<num;}
    file.close();
}`
},

{
id:"cpp_conv_2",
question:"Convert int to string",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    int num;
    cout << "Enter the number: ";
    cin >> num;

    ofstream file("data2.txt");
    file << num;
    file.close();

    ifstream file2("data2.txt");
    string str;
    file2 >> str;

    cout << "String is: " << str;
}`
},

{
id:"cpp_conv_3",
question:"Convert String to long",
answer:`// C++ Program to convert String to long
#include <iostream>
#include <fstream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to Convert (only Numeric): ";
    cin>>str;
    try{
        long num = stol(str);
        cout<<"converted string: "<<num;        
    }
    catch(...){
        cout<<"Invalid Input";
    }


}`
},

{
id:"cpp_conv_4",
question:"Convert long to String",
answer:`// C++ Program to convert long to String
#include<iostream>
using namespace std;
int main(){
    long num;
    cout<<"Enter the long int to convert";
    cin>>num;
    if(cin.fail()){
        cout<<"Invalid Input";      
    }
    else{
        string str = to_string(num);
        cout<<"Converted: "<<str;
    }
    

}`
},

{
id:"cpp_conv_5",
question:"Convert String to float",
answer:`// C++ Program to convert String to float
#include <iostream>
#include <iomanip>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to convert (only Number)";
    cin>>str;
    try{
        size_t pos;
        float num = stof(str,&pos);
        if(pos!=str.length()){
            cout<<"Invalid Character mix";
        }
        else{
        cout<<fixed<<setprecision(2);
        cout<<"Converted: "<<num;}
    }
    catch(exception &e){
        cout<<"invalid Input"<<e.what();
    }
}`
},

{
id:"cpp_conv_6",
question:"Convert float to String",
answer:`// C++ Program to convert float to String
#include<iostream>
#include<iomanip>
using namespace std;
int main(){
    float num;
    cout<<"Enter the Float to convert ";
    cin>>num;
    if(cin.fail()){
        cout<<"Invalid Input";        
    }
    else{
        string str = to_string(num);
        cout<<fixed<<setprecision(2);
        cout<<"Converted: "<<str;
    }
}`
},

{
id:"cpp_conv_7",
question:"Convert String to double",
answer:`#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    string str;
    cout<<"Enter the string to convert (only numeric): ";
    cin>>str;

    try{
        size_t pos;
        double num = stod(str, &pos);

        if(pos != str.length()){
            cout<<"Invalid input (extra characters)";
        }
        else{
            cout<<fixed<<setprecision(4);
            cout<<"Converted: "<<num;
        }
    }
    catch (invalid_argument &e){
        cout<<"Invalid input (not a number)";
    }
    catch (out_of_range &e){
        cout<<"Number out of range";
    }
}`
},

{
id:"cpp_conv_8",
question:"Convert double to String",
answer:`// C++ Program to convert double to String
#include <iostream>
using namespace std;
int main(){
    double num;
    cout<<"Enter the number to convert: ";
    cin>>num;
    if(cin.fail()){
        cout<<"invalid input";
    }
    else{
        string str = to_string(num);
        cout<<"converted: "<<str;
    }
}`
},

{
id:"cpp_conv_9",
question:"Convert char to int",
answer:`#include <iostream>
using namespace std;

int main(){
    char k;
    cout<<"Enter a digit: ";
    cin>>k;

    if(k >= '0' && k <= '9'){
        int num = k - '0';
        cout<<"Converted: "<<num;
    } else {
        cout<<"Invalid input (not a digit)";
    }
}`
},

{
id:"cpp_conv_10",
question:"Convert int to char",
answer:`    // C++ Program to convert int to char
    #include <iostream>
    using namespace std;
    int main(){
        int num;
        cout<<"Enter the int to convert: ";
        cin>>num;
        char convert = (char)num;
        cout<<"Converted: "<<convert;

    }`
},

{
id:"cpp_conv_11",
question:"Binary to Decimal",
answer:`// C++ Program to convert Binary to Decimal
#include <iostream>
using namespace std;
int main(){
    string binary;
    int decimal =0;
    cout<<"Enter the binary to convert: ";
    cin>>binary;
    int lenght = binary.length();
    for(int i =0;i<lenght;i++){
        if(binary[i]!='0'&&binary[i]!='1'){
            cout<<"Invalid binary";
            return 0;
        }
        decimal = decimal*2+(binary[i]-'0');
    }
cout<<"\n"<<"decimal: "<<decimal;

}`
},

{
id:"cpp_conv_12",
question:"Decimal to Binary",
answer:`// C++ Program to convert Decimal to Binary
#include<iostream>
using namespace std;
int main(){
    int decimal;
    cout<<"Enter the decimal to convert: ";
    cin>>decimal;
    if(cin.fail()){
        cout<<"Invalid Input";
    }
    if(decimal == 0){
        cout<<"binary: 0";
        return 0;
    }
    string binary="";
    while(decimal>0){
        binary = char((decimal%2)+'0')+binary;
        decimal = decimal/2;
    }
    cout<<"converted Binary: "<<binary;


}`
},

{
id:"cpp_conv_13",
question:"Hex to Decimal",
answer:`// C++ Program to convert Hex to Decimal
#include <iostream>
using namespace std;
int main(){
    string hex;
    cout<<"Enter the hex to convert: ";
    cin>>hex;   
    int value;
    int decimal = 0;
    for(int i = 0;i<hex.length();i++){
        char ch = hex[i];
        if(ch>='0'&&ch<='9'){
            value = ch-'0';
        }
        else if(ch>='A'&&ch<='F'){
            value = ch -'A'+10;
        }
        else if(ch>='a'&&ch<='z'){
            value = ch-'a'+10;
        }
        else{
            cout<<"Not a valid input";
        }
        
        decimal = decimal*16+value;
        
    }
    cout<<"\n"<<"output: "<<decimal;
}`
},

{
id:"cpp_conv_14",
question:"Decimal to Hex",
answer:`// C++ Program to convert Decimal to Hex
#include <iostream>
using namespace std;
int main(){
    int decimal;
    cout<<"Enter the decimal: ";
    cin>>decimal;
    if(decimal==0){
        cout<<"Hex = 0";
        return 0;
    }
    string hex="";
    while(decimal>0){
        int rem = decimal%16;
        char ch;
        if(rem<10){
            ch = rem+'0';
        }
        else{
            ch = rem -10+'A';
        }
        hex = ch +hex;
        decimal = decimal/16;
    }
cout<<"The converted: "<<hex;
}`
},

{
id:"cpp_conv_15",
question:"Octal to Decimal",
answer:`#include <iostream>
using namespace std;

int main(){
    string octal;
    cout<<"Enter the octal to convert: ";
    cin>>octal;

    int decimal = 0;

    for(int i = 0; i < octal.length(); i++){
        if(octal[i] < '0' || octal[i] > '7'){
            cout<<"Invalid octal";
            return 0;
        }

        decimal = decimal * 8 + (octal[i] - '0');
    }

    cout<<"Converted: "<<decimal;
}`
},

{
id:"cpp_conv_16",
question:"Decimal to Octal",
answer:`// C++ Program to convert Decimal to Octal
#include <iostream>
using namespace std;
int main(){
    int decimal=0;
    cout<<"Enter the decimal to convert: ";
    cin>>decimal;
    if(decimal ==0){
        cout<<"Converted: 0";
        return 0;
    }
    string oct;
    while(decimal>0){
        int rem = decimal%8;
        oct = char(rem +'0')+oct;
        decimal = decimal/8;
    }
    cout<<"Converted: "<<oct;
}`
}

],

  "OBJECT ORIENTED PROGRAMMING": [

{
id:"cpp_oops_1",
question:"Write a C++ program to create a class called Person with a name and age attribute. Create two instances and print their details.",
answer:`#include <iostream>
#include <cstring>
using namespace std;
class person
{
    int age;
    char name[20];

public:
    person(char n[], int a)
    {
        strcpy(name, n);
        age = a;
        cout << "name :" << name << endl;
        cout << "age :" << age << endl;
    }
};
int main()
{
    person p("allu", 18);
    person p1("arjun", 28);
    return 0;
}`
},

{
id:"cpp_oops_2",
question:"Write a C++ program to create a Dog class with constructor and setter methods.",
answer:`#include <iostream>
#include <cstring>
using namespace std;
class dog
{
    string name;
    string breed;

public:
    dog() {}
    dog(string n, string b)
    {
        name = n;
        breed = b;
        cout << "name :" << name << endl;
        cout << "breed :" << breed << endl;
    }
    void setNewdata()
    {
        cout << "enter the new name :";
        cin >> name;
        cout << "enter the breed :";
        cin >> breed;
    }
    void display()
    {
        cout << "name :" << name << endl;
        cout << "breed :" << breed << endl;
    }
};

int main()
{
    cout << "with constructor--->" << endl;
    dog d1("monty", "pitbull");
    cout << "with the setter function--->" << endl;
    dog d2;
    d2.setNewdata();
    d2.display();
    return 0;
}`
},

{
id:"cpp_oops_3",
question:"Write a C++ program to create a Rectangle class and calculate area and perimeter.",
answer:`#include <iostream>
#include <cstring>
using namespace std;

class rectangle
{
    int width, height, area, perimeter;

public:
    void setdata()
    {
        cout << "enter the width :";
        cin >> width;
        cout << "enter the height :";
        cin >> height;
    }
    int getarea()
    {
        area = height * width;
    }
    int getperimeter()
    {
        perimeter = 2 * height * width;
    }
    void display()
    {
        cout << "area of the rectangle :" << area << endl;
        cout << "perimeter of the rectangle :" << perimeter << endl;
    }
};
int main()
{
    rectangle r;
    r.setdata();
    r.getarea();
    r.getperimeter();
    r.display();
    return 0;
}`
},

{
id:"cpp_oops_4",
question:"Write a C++ program to create a Circle class and calculate area and circumference.",
answer:`#include <iostream>
#include <cstring>
using namespace std;
const float pi = 3.14;

class circle
{
    float radius, area, c;

public:
    void setdata()
    {
        cout << "enter the radius :";
        cin >> radius;
    }
    int getarea()
    {
        area = pi * radius * radius;
    }
    int getperimeter()
    {
        c = 2 * pi * radius;
    }
    void display()
    {
        cout << "area of the circle :" << area << endl;
        cout << "circumfrence of the circle :" << c << endl;
    }
};
int main()
{
    circle c;
    c.setdata();
    c.getarea();
    c.getperimeter();
    c.display();
    return 0;
}`
},

{
id:"cpp_oops_5",
question:"Write a C++ program to create a Book class and manage collection.",
answer:`// Write a C++ program to create a class called "Book" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.
#include <iostream>
#include <cstring>
using namespace std;

class book
{
    string title, author, ISBN;

public:
    static int bookcount;
    book() {}
    void addBook(string t, string a, string i)
    {
        title = t;
        author = a;
        ISBN = i;

        bookcount++;
    }

    string getISBN()
    {
        return ISBN;
    }
    void display()
    {
        cout << "Title :" << title << endl;
        cout << "Author :" << author << endl;
        cout << "ISBN :" << ISBN << endl;
    }
};

int book ::bookcount = 0;
book collection[50];

void addbook();
void removebook();
void showbook();

int main()
{
    int choice = 1;

    cin.ignore();
    while (choice)
    {
        cout << "1) Add a Book" << endl;
        cout << "2) Delete a Book" << endl;
        cout << "3) Display all Books" << endl;
        cout << "0) Exit the Menu/Program" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            addbook();
            break;
        case 2:
            removebook();
            break;
        case 3:
            showbook();
            break;

        default:
            break;
        }
    }

    return 0;
}

void addbook()
{
    string title, author, ISBN;

    if (book::bookcount > sizeof(collection))
    {
        cout << "Collection space full" << endl;
        return;
    }

    cout << "Enter Book details: " << endl;
    cout << "Title: ";
    getline(cin, title);
    cout << "Author: ";
    getline(cin, author);
    cout << "ISBN: ";
    cin >> ISBN;

    collection[book::bookcount].addBook(title, author, ISBN);

    cout << "Book Added ";
}

void removebook()
{
    string ISBN;
    int isFound = 0;
    int i;

    cout << "Enter ISBN for the book to delete: ";
    cin >> ISBN;

    for (i = 0; i < book::bookcount; i++)
    {
        if (ISBN == (collection[i].getISBN()))
        {
            isFound = 1;
            break;
        }
    }

    if (isFound)
    {
        for (int j = i; j < book::bookcount - 1; j++)
        {
            collection[j] = collection[j + 1];
        }

        cout << "Book Deleted! ";
        book::bookcount--;
    }
}

void showbook()
{
    for (int i = 0; i < book::bookcount; i++)
    {
        collection[i].display();
    }
    cout << endl;
}`
},

{
id:"cpp_oops_6",
question:"Write a C++ program to create an Employee class and update salary.",
answer:`//Write a C++ program to create a class called "Employee" with a name, job title, and salary attributes, and methods to calculate and update salary.
#include<iostream>
#include<cstring>
using namespace std;

class employee
{
    string name,job,title;
    float salary;
    public:
    employee(){}
    employee(string n,string j,string t,float s)
    {
        name=n;
        job=j;
        title=t;
        salary=s;
    }
    void updatesalary(float newsalary)
    {
        salary = newsalary;
    }
    float calculatesalary(float bonus)
    {
        return bonus + salary;
    }
    void display()
    {
        cout<<"name :"<<name<<endl;
        cout<<"job :"<<job<<endl;
        cout<<"title :"<<title<<endl;
        cout<<"salary :"<<salary<<endl;
        

    }

};

int main()
{
    employee e("allu","developer","senior",80000);
    e.display();
    cout<<"\nupdating salary---->"<<endl;
    e.updatesalary(95000);
    e.display();
    cout<<"\ncalculating salary---->"<<endl;
    cout<<"salary after bonus :"<<e.calculatesalary(50000)<<endl;
    
    return 0;
}`
},

{
id:"cpp_oops_7",
question:"Write a C++ program to create Bank and Account classes.",
answer:`// Write a C++ program to create a class called "Bank" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called "Account" to maintain account details of a particular customer.
#include <iostream>
using namespace std;

class account
{
private:
    int accountNumber;
    string name;
    int balance;

public:
    static int nextAccountNumber;
    account() {}
    void makeaccount(int &bal, string &nam)
    {
        balance = bal;
        name = nam;
        accountNumber = nextAccountNumber;
        nextAccountNumber++;
    }

    int getaccountnumber()
    {
        return accountNumber;
    }

    int getbalance()
    {
        return balance;
    }
    
    string getname()
    {
        return name;
    }

    void setdetail(int bal, int acc, string nam)
    {
        balance = bal;
        name = nam;
        accountNumber = acc;
    }

    void withdraw(int &amt)
    {
        if (amt <= balance)
        {
            balance -= amt;
            cout << "Money withdrawn succesfully";
        }
        else
        {
            cout << "Insuffecient Balance";
        }
    }

    void deposit(int &amt)
    {
        balance += amt;
        cout << "Money deposited succesfully";
    }
};

int account::nextAccountNumber = 1;

class bank
{
private:
    account collection[100];

public:
    static int accountCount;

    void addaccount()
    {
        string name;
        int initbal;

        cout << "Enter Account holder Name: ";
        getline(cin, name);
        cout << "Enter Initial Balance: ";
        cin >> initbal;

        collection[accountCount].makeaccount(initbal, name);
        accountCount++;
    }

    void withdraw()
    {
        int acc, amt, isFound = 0, i;

        cout << "Enter Account number:";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            cout << "Account Found!" << endl;
            cout << "Enter Amount: ";
            cin >> amt;

            collection[i].withdraw(amt);
        }
    }

    void deposit()
    {
        int acc, amt, isFound = 0, i;

        cout << "Enter Account number:";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            cout << "Account Found!" << endl;
            cout << "Enter Amount: ";
            cin >> amt;

            collection[i].deposit(amt);
        }
    }

    void removeaccount()
    {
        int acc, i, isFound = 0;

        cout << "Enter Account Number: ";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            for (int j = i; j < accountCount; j++)
            {
                collection[j].setdetail((collection[j + 1].getbalance()), (collection[j + 1].getaccountnumber()), (collection[j + 1].getname()));
            }

            cout << "Account Removed";
            accountCount--;
        }
    }
};

int bank::accountCount = 0;

int main()
{
    class bank IOB;
    int choice = 1;

    while (choice)
    {
        cout << "1) Add a account" << endl;
        cout << "2) Remove a Account" << endl;
        cout << "3) Withdraw Money from an account" << endl;
        cout << "4) Deposit Money from an account" << endl;
        cout << "0) Exit the Menu/Program" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            IOB.addaccount();
            break;
        case 2:
            IOB.removeaccount();
            break;
        case 3:
            IOB.withdraw();
            break;
        case 4:
            IOB.deposit();
            break;
        default:
            break;
        }
    }

    return 0;
}`
},

{
id:"cpp_oops_8",
question:"Write a C++ program to create TrafficLight class.",
answer:`//Write a C++ program to create a class called "TrafficLight" with attributes for color and duration, and methods to change the color and check for red or green.
#include<iostream>
#include<cstring>
using namespace std;

class trafficlight{
    string color;
    int duration;
    public:
    trafficlight(string c, int t)
    {
        color=c;
        duration=t;

    }

    void setcolor(string newcolor)
    {
        string red,green;
        color = newcolor;
        if(color=="red")
        {
            cout<<"stop!"<<endl;
        }
        else if(color=="green")
        {
            cout<<"go!"<<endl;
        }
        else
        {
            cout<<"wait-- until green"<<endl;
        }
        
    }
    void display()
    {
        cout<<"color :"<<color<<endl;
        cout<<"duration :"<<duration<<endl;
    }
    
};

int main()
{
    trafficlight t("red",20);
    t.display();
    cout<<"\nchanging color---\n";
    t.setcolor("green");
    t.display();
    return 0;

}`
},

{
id:"cpp_oops_9",
question:"Write a C++ program to calculate years of service.",
answer:`//Write a C++ program to create a class called "Employee" with a name, salary, and hire date attributes, and a method to calculate years of service.
#include<iostream>
#include<cstring>

using namespace std;
class employee
{
    string name;
    int date_of_hiring;
    int salary;
    public:
    employee(string n,int h,int s)
    {
        name=n;
        date_of_hiring=h;
        salary=s;
    }
    int yearsOfService()
    {
        int currentYear=2026;
   return (currentYear-date_of_hiring);
    }
    void display()
    {
        cout<<"name :"<<name<<endl;
        cout<<"salary :"<<salary<<endl;
        cout<<"date of hiring :"<<date_of_hiring<<endl;
    }
};
int main()
{
    employee e("allu",2012,80000);
    e.display();
    cout<<"years of services :"<<e.yearsOfService();

return 0;
}`
},

{
id:"cpp_oops_10",
question:"Write a C++ program to manage Student courses.",
answer:`//Write a C++ program to create a class called "Student" with a name, grade, and courses attributes, and methods to add and remove courses.
#include<iostream>
using namespace std;

class Student
{
    string name;
    string grade;
    string courses[10];
    int courseCount;

public:

    Student(string n,string g)
    {
        name = n;
        grade = g;
        courseCount = 0;
    }

    void addCourse(string course)
    {
        courses[courseCount] = course;
        courseCount++;
    }

    void removeCourse(string course)
    {
        for(int i=0;i<courseCount;i++)
        {
            if(courses[i] == course)
            {
                for(int j=i;j<courseCount-1;j++)
                {
                    courses[j] = courses[j+1];
                }
                courseCount--;
                cout<<"Course removed"<<endl;
                return;
            }
        }
    }

    void display()
    {
        cout<<"Name : "<<name<<endl;
        cout<<"Grade : "<<grade<<endl;

        cout<<"Courses : "<<endl;
        for(int i=0;i<courseCount;i++)
        {
            cout<<courses[i]<<endl;
        }
    }
};

int main()
{
    Student s("Armaan","A");

    s.addCourse("Math");
    s.addCourse("Physics");
    s.addCourse("Computer");

    cout<<"Student Details"<<endl;
    s.display();

    cout<<"\nRemoving course Physics\n";
    s.removeCourse("Physics");

    cout<<"\nUpdated Details"<<endl;
    s.display();

    return 0;
}`
},

{
id:"cpp_oops_11",
question:"Write a C++ program to create Library system.",
answer:`// Write a C++ program to create a class called "Library" with a collection of books and methods to add and remove books.
#include <iostream>
#include <cstring>
using namespace std;

class library
{
    string books[10];
    int count = 0;

public:

    void addbook(string b)
    {
        books[count] = b;
        count++;
        cout << "book added succesfully!!!" << endl;
    }

    void removebook(string book)
    {
        for (int i = 0; i < count; i++)
        {
            if (books[i] == book)
            {
                for (int j = i; j < count - 1; j++) // for shifting into the array
                {
                    books[j] = books[j + 1];
                }
                count--; // reduce total book count
                cout << "\nsuccesfully removed the book\n";
            }
        }
    }

    void displayBooks()
    {
        cout << "Books in Library:" << endl;

        for (int i = 0; i < count; i++)
        {
            cout << books[i] << endl;
        }
    }
    
};
int main()
{
    library l;

    l.addbook("math");
    l.addbook("physics");
    l.addbook("chemistry");
    l.displayBooks();
    cout << "\nremoving a book\n";
    l.removebook("physics");
    cout << "\n updated library\n";
    l.displayBooks();
    return 0;
}`
},

{
id:"cpp_oops_12",
question:"Write a C++ program for Airplane class.",
answer:`//Write a C++ program to create a class called "Airplane" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.
#include <iostream>
#include <string>
using namespace std;

class Airplane {
private:
    string flightNumber;
    string destination;
    string departureTime;
    bool delayed;

public:
    // Constructor
    Airplane(string fn, string dest, string time) {
        flightNumber = fn;
        destination = dest;
        departureTime = time;
        delayed = false;
    }

    // Method to check flight status
    void checkStatus() {
        cout << "Flight Number: " << flightNumber << endl;
        cout << "Destination: " << destination << endl;
        cout << "Departure Time: " << departureTime << endl;

        if (delayed)
            cout << "Status: Delayed" << endl;
        else
            cout << "Status: On Time" << endl;
    }

    // Method to delay the flight
    void delayFlight() {
        delayed = true;
        cout << "Flight " << flightNumber << " has been delayed." << endl;
    }
};

int main() {
    // Create an Airplane object
    Airplane flight1("AI202", "New York", "10:30 AM");

    cout << "Initial Flight Status:\n";
    flight1.checkStatus();

    cout << "\nDelaying the flight...\n";
    flight1.delayFlight();

    cout << "\nUpdated Flight Status:\n";
    flight1.checkStatus();

    return 0;
}`
},

{
id:"cpp_oops_13",
question:"Write a C++ program for Inventory system.",
answer:`//
//Write a C++ program to create a class called "Inventory" with a collection of products and methods to add and remove products, and to check for low inventory.
#include <iostream>
#include <string>
using namespace std;

class inventory
{
   
  string product[5];
  int total_product=0;

  public:
  int i=0;
  void addproduct(string p)
  {
    product[total_product]=p;
    total_product++;
   
  }
  void details()
  {
    cout<<"\n-----product details----\n";
    for(int i=0;i<total_product;i++)
    {
        cout<<"product"<<i+1<<" :"<<product[i]<<endl;
    }
  }
  void removeproduct(string p)
  {
    for(int i=0;i<total_product;i++)
    {
        if(product[i]==p)
        {
            for(int j=i;j<total_product-1;j++)
            {
                product[total_product]=product[total_product+1];
            }
          
        }
          total_product--;
            cout<<"product removed";
    }
   
  }
  void checkstock(int t)
  {
    if(total_product == t)
    {
     cout<<"stock is full.";

    }
    else{
        cout<<"stock is less";
    }
  }
  

};
int main()
{
    inventory i;
    i.addproduct("shampoo");
    i.addproduct("toothpaste");
    i.addproduct("oil");
    i.addproduct("pulses");
     cout<<"\n-----products added---\n";
    i.details();
    cout<<"\n----removing products----\n";
    i.removeproduct("oil");
    i.details();
    i.checkstock(3);
    return 0;

}`
},

{
id:"cpp_oops_14",
question:"Write a C++ program for School management.",
answer:`//Write a C++ program to create a class called "School" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.
#include <iostream>
#include <string>
using namespace std;

 class school
 {
    
    string students[5],teachers[5],classes[5];
    int count_s=0;
    int count_t=0;
    int count_c=0;
    public:
    void addstudents(string s)
    {
        students[count_s]=s;
        count_s++;
    }
    void removestudents(string s)
    {
        for(int i=0;i<count_s;i++)
        {
            if(students[i]==s)
            {
                for(int j=i;j<count_s-1;j++)
                {
                    students[j]=students[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
count_s--;
            cout<<"student removed"<<endl;
            }
            
        }
    }
    void addteachers(string t)
    {
        teachers[count_t]=t;
        count_t++;
    }
    void removeteacher(string t)
    {
        for(int i=0;i<count_t;i++)
        {
            if(teachers[i]==t)
            {
                for(int j=i;j<count_t-1;j++)
                {
                    teachers[j]=teachers[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
count_t--;
            cout<<"teacher's removed"<<endl;
            }
            
        }
    }
    void addclass(string c)
    {
        classes[count_c]=c;
        count_c++;
    }
    void removeclass(string c)
    {
        for(int i=0;i<count_c;i++)
        {
            if(classes[i]==c)
            {
                for(int j=i;j<count_c-1;j++)
                {
                    classes[j]=classes[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
 count_c--;
            cout<<"classes removed"<<endl;
            }
           
        }
    }
     void displaystudents()
    {
        cout<<"\nStudents:\n";
        for(int i=0;i<count_s;i++)
        {
            cout<<students[i]<<endl;
        }
    }

    void displayteachers()
    {
        cout<<"\nTeachers:\n";
        for(int i=0;i<count_t;i++)
        {
            cout<<teachers[i]<<endl;
        }
    }

    void displayclasses()
    {
        cout<<"\nClasses:\n";
        for(int i=0;i<count_c;i++)
        {
            cout<<classes[i]<<endl;
        }
    }



 };
 int main()
 {
school s;
s.addstudents("allu");
s.addstudents("arjun");
s.addstudents("rampal");
s.addteachers("Mr.krrish");
s.addteachers("Mr.spiderman");
s.addclass("bca");
s.removestudents("arjun");
s.removeteacher("Mr.spiderman");

s.displaystudents();
s.displayteachers();
s.displayclasses();

return 0;   
 }`
},

{
id:"cpp_oops_15",
question:"Write a C++ program for MusicLibrary.",
answer:`//Write a C++ program to create a class called "MusicLibrary" with a collection of songs and methods to add and remove songs, and to play a random song.
#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

class MusicLibrary
{
    string songs[10];
    int count = 0;

public:

    void addsong(string s)
    {
        if(count < 10)
        {
            songs[count] = s;
            count++;
            cout << "Song added\n";
        }
        else
        {
            cout << "Library full\n";
        }
    }

    void removesong(string s)
    {
        for(int i = 0; i < count; i++)
        {
            if(songs[i] == s)
            {
                for(int j = i; j < count-1; j++)
                {
                    songs[j] = songs[j+1];
                }

                count--;
                cout << "Song removed\n";
                return;
            }
        }

        cout << "Song not found\n";
    }

    void playrandomsong()
    {
        if(count == 0)
        {
            cout << "No songs in library\n";
            return;
        }

        srand(time(0));
        int r = rand() % count;//this give random value from (0-n)

        cout << "Now playing: " << songs[r] << endl;
    }

    void displaysongs()
    {
        cout << "\nSongs in Library:\n";
        for(int i = 0; i < count; i++)
        {
            cout << songs[i] << endl;
        }
    }
};

int main()
{
    MusicLibrary m;

    m.addsong("blinding light");
    m.addsong("one dance");
    m.addsong("ben 10");

    m.displaysongs();

    m.playrandomsong();

    m.removesong("Believer");

    m.displaysongs();

    return 0;
}`
},

{
id:"cpp_oops_16",
question:"Write a C++ program using abstract Shape class.",
answer:`//Write a C++ program to create a class called "Shape" with abstract methods for calculating area and perimeter, and subclasses for "Rectangle", "Circle", and "Triangle".
#include <iostream>
using namespace std;
class shape
{

public:
    virtual void area() = 0;
    virtual void perimeter() = 0;
};
class rectangle : public shape
{
    int area_r, perimeter_r;
    int l, b;

public:
    void area() override
    {

        cout << "enter the length and breadth of rectangle :";
        cin >> l >> b;
        area_r = l * b;
        cout << "area of the rectangle :" << area_r << endl;
    }
    void perimeter() override
    {

        perimeter_r = 2 * (l + b);
        cout << "perimeter of the rectangle :" << perimeter_r << endl;
    }
};
class circle : public shape
{
    float area_c, perimeter_c, r;

public:
    const float pi = 3.145;
    void area() override
    {
        cout << "enter the radius :";
        cin >> r;
        area_c = pi * r * r;
        cout << "the area of the circle :" << area_c << endl;
    }
    void perimeter() override
    {
        perimeter_c = 2 * pi * r;
        cout << "circumfrence of the circle :" << perimeter_c << endl;
    }
};
class triangle : public shape
{
    int height, side, area_t, perimeter_t;

public:
    void area() override{
        cout << "enter the height and side of the triangle : ";
        cin>>height>>side;
        area_t=(height+side)/2;
        cout<<"area of the triangle :"<<area_t<<endl;
}
void perimeter() override{
    perimeter_t=side+side+side;
    cout<<"perimeter of the triangle :"<<perimeter_t<<endl;
}
};

int main()
{
    rectangle r;
    cout<<"\n-------rectangle----\n";
    r.area();
    r.perimeter();
    circle c;
    cout<<"\n-------circle----\n";
    c.area();
    c.perimeter();
    triangle t;
    cout<<"\n-------triangle----\n";
    t.area();
    t.perimeter();

    return 0;
      
}`
},

{
id:"cpp_oops_17",
question:"Write a C++ program for Movie class.",
answer:`// Write a C++ program to create a class called "Movie" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.
#include <iostream>
using namespace std;
class movie
{
    string title, director, actors, review[5];
    int count_r = 0;

public:
    movie(string t, string d, string a)
    {
        title = t;
        director = d;
        actors = a;
    }
    void addreview(string r)
    {
        review[count_r] = r;
        count_r++;
    }
    void RemoveReview(string r)
    {
        for (int i = 0; i < count_r; i++)
        {
            if (review[i] == r)
            {
                for (int j = i; j < count_r - 1; j++)
                {
                    review[i] = review[i + 1];
                }
                count_r--;
                cout << "review removed";
            }
        }
    }
    void displaytitle()
    {

        {
            cout << "movie  :" << title << endl;
        }
    }
    void displaydirector()
    {

        {
            cout << "director  :" << director << endl;
        }
    }
    void displayactors()
    {

        {
            cout << "actor  :" << actors << endl;
        }
    }
    void displayreview()
    {
        for (int i = 0; i < count_r; i++)
        {
            cout << "review " << i + 1 << " :" << review[i] << endl;
        }
    }
};

int main()
{
    movie m("titanic", "chirostopher nolan", "tiger shroff");
    m.addreview("this is great movie");
    m.addreview("this is fantastic and nostalgic movie");
    m.addreview("such a emotional movie");
    cout << "Your Review is added!";

    m.RemoveReview("this is fantastic and nostalgic movie");
    cout << "\n-------Director-----\n";
    m.displaydirector();
    cout << "\n-------Title-----\n";
    m.displaytitle();
    cout << "\n-------Actors-----\n";
    m.displayactors();
    cout << "\n-------review(after removing)-----\n";
    m.displayreview();

    return 0;
}`
},

{
id:"cpp_oops_18",
question:"Write a C++ program for Restaurant class.",
answer:`//Write a C++ program to create a class called "Restaurant" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.
#include<iostream>
#include<cstring>
using namespace std;

class Restaurant
{
    string menuitems[10];
    int price,rating[20],total_items=0,total_visits=20;
    public:
    void additems(string m)
    {
       menuitems[total_items]=m;
       total_items++;
    //  cout<<"Item added to the Menu.";

    }
    void removeItem(string m)
    {
        for(int i=0;i<total_items;i++)
        {
            if(menuitems[i]==m)
            {
                for(int j=i;j<total_items-1;j++)//-1 for the validation because if the total item is 4
        //but index is 0-3 so we do it to validate
                {
                    menuitems[j]=menuitems[j+1];
                }
                total_items--;
            }
        }
    }
    void ratingOfRestaurant()
    {
    for(int i=0;i<total_visits;i++)
    {
        cout<<"rating from the customer"<<i+1<<" :";
        cin>>rating[i];
    }
    }
    void average_rating()
    {
        int sum=0;
        float average=0;
        for(int i=0;i<total_visits;i++)
        {
            sum+=rating[i];
        }
        average=(float)sum/20;//correction claude

        cout<<"The avg. rating of the restaurant :"<<average;
    }
    void displaymenuItem()
    {
        if(total_items==0)
        {
            cout<<"Menu is empty.\n";
            return ;
        }
        for(int i=0;i<total_items;i++)
        {
            cout<<"Item "<<i+1<<" :"<<menuitems[i]<<endl;
        }
    }
};

int main()
{
    string item;
    int n;//correct by claude
    Restaurant r;
   
    cout<<"how many items you want to add ?";
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cout<<"enter the items :"<<endl;
        cin>>item;

        r.additems(item);
    }
     cout<<"\n--------Menu OF The Restaurant-------\n";
     r.displaymenuItem();
    r.ratingOfRestaurant();

    cout<<"\n-----Average Rating Of The Restaurant-----\n";
    r.average_rating();

    return 0;


    
}`
},

{
id:"cpp_oops_19",
question:"Write a C++ program for TravelBooking system.",
answer:`//Write a C++ program to create a class with methods to search for flights and hotels, and to book and cancel reservations.
#include<iostream>
#include<string>
using namespace std;

class TravelBooking
{
    string flights[5];
    string hotels[5];
    int totalFlights = 3;
    int totalHotels = 3;
    bool flightBooked = false;
    bool hotelBooked = false;

public:

    // constructor to initialize data
    TravelBooking()
    {
        flights[0] = "Delhi to Mumbai";
        flights[1] = "Delhi to Goa";
        flights[2] = "Delhi to Bangalore";

        hotels[0] = "Taj Hotel";
        hotels[1] = "Oberoi Hotel";
        hotels[2] = "Radisson Hotel";
    }

    void searchFlights()
    {
        cout<<"\nAvailable Flights:\n";
        for(int i=0;i<totalFlights;i++)
        {
            cout<<i+1<<" : "<<flights[i]<<endl;
        }
    }

    void searchHotels()
    {
        cout<<"\nAvailable Hotels:\n";
        for(int i=0;i<totalHotels;i++)
        {
            cout<<i+1<<" : "<<hotels[i]<<endl;
        }
    }

    void bookReservation()
    {
        int choice;

        cout<<"\n1. Book Flight\n";
        cout<<"2. Book Hotel\n";
        cout<<"Enter your choice: ";
        cin>>choice;

        if(choice==1)
        {
            flightBooked = true;
            cout<<"Flight booked successfully.\n";
        }
        else if(choice==2)
        {
            hotelBooked = true;
            cout<<"Hotel booked successfully.\n";
        }
    }

    void cancelReservation()
    {
        int choice;

        cout<<"\n1. Cancel Flight\n";
        cout<<"2. Cancel Hotel\n";
        cout<<"Enter your choice: ";
        cin>>choice;

        if(choice==1 && flightBooked)
        {
            flightBooked = false;
            cout<<"Flight reservation cancelled.\n";
        }
        else if(choice==2 && hotelBooked)
        {
            hotelBooked = false;
            cout<<"Hotel reservation cancelled.\n";
        }
        else
        {
            cout<<"No reservation found.\n";
        }
    }
};

int main()
{
    TravelBooking t;

    t.searchFlights();
    t.searchHotels();

    t.bookReservation();

    t.cancelReservation();

    return 0;
}`
},

{
id:"cpp_oops_20",
question:"Write a C++ program to demonstrate default constructor.",
answer:`#include <iostream>
#include <cstring>
using namespace std;
class test
{
public:
    test()
    {
        cout << "default constructor is called.";
    }
};
int main()
{
    test t;
    return 0;
}`
},

{
id:"cpp_oops_21",
question:"Create a class showing an example of parameterized constructor.",
answer:`#include<iostream>
#include<cstring>
using namespace std;
class test
{
    int x;
    public:
    test(int a)
    {
       x=a;
       cout<<"x :"<<x;
    }
};
int main()
{
    test t(18);
    return 0;
}`
},

{
id:"cpp_oops_22",
question:"Create a class showing an example of copy constructor.",
answer:`#include<iostream>
#include<cstring>
using namespace std;
class test
{
    int x;
    public:
    test(int a)
    {
        x=a;
    }
    test(test &obj1)
    {
        cout<<obj1.x;
    }
};
int main()
{
    test t(10);
    test obj2=t;
    return 0;
}`
},

{
id:"cpp_oops_23",
question:"Create a class for 10 students where roll number is automatically generated.",
answer:`#include <iostream>
using namespace std;

class students
{
private:
    int roll;
    string name, Class;

public:
    static int nextRollNumber;
    students()
    {
        roll = nextRollNumber;
        nextRollNumber++;
    }
    void setname(string &nam)
    {
        name = nam;
    }
    void setclass(string &clas)
    {
        Class = clas;
    }
    string getname()
    {
        return name;
    }
    string getclass()
    {
        return Class;
    }
    int getroll()
    {
        return roll;
    }
};

int students::nextRollNumber = 1;

int main()
{
    students student[10];
    string str;

    cout << "Enter the details for 10 students: " << endl;
    cin.ignore();
    for (int i = 0; i < 10; i++)
    {
        cout << "Student " << i + 1 << endl;

        cout << "Name: ";
        getline(cin, str);
        student[i].setname(str);
        cout << "Class: ";
        getline(cin, str);
        student[i].setclass(str);
    }

    cout << "All students Details" << endl;
    for (int i = 0; i < 10; i++)
    {
        cout << "Student " << i + 1 << endl;

        cout << "Roll Number: " << student[i].getroll() << endl;
        cout << "Name: " << student[i].getname() << endl;
        cout << "Class: " << student[i].getclass() << endl;
    }
    return 0;
}`
},

{
id:"cpp_oops_24",
question:"Create a class to calculate area using method overloading.",
answer:`#include <iostream>
using namespace std;

class shape
{
   float length, breadth, radius;
   const float pi = 3.14;

public:
   shape() {}
   float setarea(float len, float bread)
   {
      length = len;
      breadth = bread;
      float area = length * breadth;
      return area;
   }
   float setarea(float rad)
   {
      radius = rad;
      float area = pi * radius * radius;
      return area;
   }
};

int main()
{
   shape s;
   cout << "Area Of the Rectangle :" << s.setarea(89.7, 56.6) << endl;
   cout << "Area Of the Circle :" << s.setarea(67.5) << endl;

   return 0;
}`
},

{
id:"cpp_oops_25",
question:"Create a Person class using getters and setters.",
answer:`#include <iostream>
using namespace std;
class person
{
    string name,country,age;
    public:
    void setdata()
    {
        cout<<"enter your name :";
        getline(cin,name);
        cout<<"\nenter your country name :";
        getline(cin,country);
        cout<<"\nenter your age :";
        getline(cin,age);
    }

    void getdata()
    {
        
        cout<<"Name :"<<name<<endl;
        cout<<"age :"<<age<<endl;
        cout<<"country :"<<country<<endl;
    }
};

int main()
{
    person p;
    p.setdata();
    cout<<"\n-----detail of the person------\n";
    p.getdata();
return 0;
}`
},

{
id:"cpp_oops_26",
question:"Create a BankAccount class using getters and setters.",
answer:`#include <iostream>
using namespace std;
class BankAccount
{
string accountNumber;
float balance;
public:
void setdata()
{
    cout<<"\n----Fill  the Account Details-----\n"<<endl;
    cout<<"Please Enter Your Account Number :";
    cin>>accountNumber;
    cout<<"Enter The Balance In Your Account :";
    cin>>balance;
}

void getaccdetail()
{
    cout<<"Account Number :"<<accountNumber<<endl;
    
}
float getbalance()
{
    cout<<"Account Balance :"<<balance<<endl;
}

void modifydata()
{
    cout<<"Enter the Updated Balance :";
    cin>>balance;

}
float getmodifydata()
{
    cout<<"Updated Balance :"
    <<balance<<endl;
}
};

int main()
{
    BankAccount b;
    b.setdata();
    b.getaccdetail();
    b.getbalance();
    b.modifydata();
    b.getmodifydata();
return 0;
}`
},

{
id:"cpp_oops_27",
question:"Create a Rectangle class using getter and setter methods.",
answer:`#include<iostream>
using namespace std;

class Rectangle
{
private:
    int length;
    int width;

public:
    void setLength(int l)
    {
        length = l;
    }

    void setWidth(int w)
    {
        width = w;
    }

    int getLength()
    {
        return length;
    }

    int getWidth()
    {
        return width;
    }
};

int main()
{
    Rectangle r;

    r.setLength(10);
    r.setWidth(5);

    cout<<"Length of rectangle : "<<r.getLength()<<endl;
    cout<<"Width of rectangle : "<<r.getWidth()<<endl;

    return 0;
}`
},

{
id:"cpp_oops_28",
question:"Create an Employee class with formatted salary getter.",
answer:`#include<iostream>
#include<string>
using namespace std;

class Employee
{
private:
    int employee_id;
    string employee_name;
    float employee_salary;

public:
    void setID(int id)
    {
        employee_id = id;
    }

    int getID()
    {
        return employee_id;
    }

    void setName(string name)
    {
        employee_name = name;
    }

    string getName()
    {
        return employee_name;
    }

    void setSalary(float salary)
    {
        employee_salary = salary;
    }

    string getSalary()
    {
        return "Salary of Employee : " + to_string(employee_salary);
    }
};

int main()
{
    Employee e;

    e.setID(101);
    e.setName("Armaan");
    e.setSalary(50000);

    cout<<"Employee ID : "<<e.getID()<<endl;
    cout<<"Employee Name : "<<e.getName()<<endl;
    cout<<e.getSalary()<<endl;

    return 0;
}`
},

{
id:"cpp_oops_29",
question:"Create a Circle class with area and perimeter methods.",
answer:`#include<iostream>
#include<cstring>
using namespace std;
 class circle
 {
    float radius;
    public:
    const float pi=3.145;
    void setradius(float r)
    {
        if(r>=0)
        {
            radius=r;
        }
        else{
            cout<<"invalid radius!!";
        }
    }
    float getradius()
    {
        return radius;
    }
    void modifyradius(float r)
    {
           if(r>=0)
        {
            radius=r;
        }
        else{
            cout<<"invalid radius!!";
        }
    }
    float claculateArea()
    {
   return pi*radius*radius;
    }
    float claculatePerimeter()
    {
   return pi*2*radius;
    }
 };
 int main()
 {
    circle c;
    c.setradius(2.2);
    cout<<"radius :"<<c.getradius()<<endl;
    cout<<"\n--After Modification---\n";
    c.modifyradius(4.4);
    cout<<"Modified Radius :"<<c.getradius()<<endl;
    cout<<"\n area and perimeter from updated radius--\n";
    cout<<"Area of circle :"<<c.claculateArea()<<endl;
    cout<<"Perimeter of circle :"<<c.claculatePerimeter()<<endl;
    return 0;
 }`
},

{
id:"cpp_oops_30",
question:"Create a Car class with getters and setters.",
answer:`#include <iostream>
#include <cstring>
using namespace std;

class car
{
    string company_name, model_name;
    int year;
    float milage;

public:
    car(float m)
    {
        milage = m;
    }
    void setcompanyName()
    {
        cout << "Enter the company of the car:";
        getline(cin, company_name);
    }
    void setmodelName()
    {
        cout << "Enter the Model:";
        getline(cin, model_name);
    }
    void setyear()
    {
        cout << "Enter the launch year:";
        cin >> year;
    }

    void modifydata()
    {
        cout << "\n---modifying data-----\n";
        cout << "Enter the company of the car:";
        getline(cin, company_name);
        cout << "Enter the Model:";
        getline(cin, model_name);
        cout << "Enter the launch year:";
        cin >> year;
        cout << "Enter the milage of the car:";
        cin >> milage;
    }
    float getmilageOfCar()
    {
        return milage;
    }
    void display()
    {
        cout << "Company :" << company_name << endl;
        cout << "model :" << model_name << endl;
        cout << "Year of launch :" << year << endl;
        cout << "Milage :" << milage << " km" << endl;
    }
};
int main()
{
    car c(20.25);
    c.setcompanyName();
    c.setmodelName();
    c.setyear();
    cout << "\n---details of the car---\n";
    c.display();
    c.modifydata();
    cout << "\n---After Modifying Data---\n";
    c.display();
    return 0;
}`
},

{
id:"cpp_oops_31",
question:"Create a Student class and add grades with validation.",
answer:`#include<iostream>
#include<string>
using namespace std;

class Student
{
private:
    int student_id;
    string student_name;
    int grades[10];
    int count = 0;

public:
    void setStudentID(int id)
    {
        student_id = id;
    }

    int getStudentID()
    {
        return student_id;
    }

    void setStudentName(string name)
    {
        student_name = name;
    }

    string getStudentName()
    {
        return student_name;
    }

    void addGrade(int grade)
    {
        if(grade >= 0 && grade <= 100)
        {
            grades[count] = grade;
            count++;
            cout<<"Grade added successfully.\n";
        }
        else
        {
            cout<<"Invalid grade! Grade must be between 0 and 100.\n";
        }
    }

    void displayGrades()
    {
        cout<<"Grades: ";
        for(int i=0;i<count;i++)
        {
            cout<<grades[i]<<" ";
        }
        cout<<endl;
    }
};

int main()
{
    Student s;

    s.setStudentID(101);
    s.setStudentName("Armaan");

    s.addGrade(85);
    s.addGrade(92);

    cout<<"Student ID: "<<s.getStudentID()<<endl;
    cout<<"Student Name: "<<s.getStudentName()<<endl;

    s.displayGrades();

    return 0;
}`
}

],



  "OPERATOR OVERLOADING": [
  {
    id: "cpp_opoverload_1",
    question: "Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers.",
    answer: `// Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers.
#include <iostream>
using namespace std;

class complex
{
    int num;

public:
    complex(int n)
    {
        num = n;
    }
    int operator+(complex &cn)
    {
        return (num + cn.getnum());
    }

    int getnum()
    {
        return num;
    }
};

int main()
{
    int a;
    cout << "Enter complex number for First object: ";
    cin >> a;
    complex num1(a);
    cout << "Enter complex number for Second object: ";
    cin >> a;
    complex num2(a);
    cout << "Sum of the two complex numbers(num1 and num2) is " << num1 + num2;
    return 0;
}`
  },
  {
    id: "cpp_opoverload_2",
    question: "Create a class Fraction to represent fractions. Overload the + operator to add two fractions.",
    answer: `//Create a class Fraction to represent fractions. Overload the + operator to add two fractions.
#include <iostream>
using namespace std;

class fraction
{
    float num;

public:
    fraction(float n)
    {
        num = n;
    }
    float operator+(fraction &cn)
    {
        return (num + cn.getnum());
    }

    float getnum()
    {
        return num;
    }
};

int main()
{
    float a,b;
    cout << "Enter Numerator for First object: ";
    cin >> a;
    cout << "Enter Denominator for First object: ";
    cin >> b;
    fraction num1(a/b);
    cout << "Enter Numerator for Second object: ";
    cin >> a;
    cout << "Enter Denominator for Second object: ";
    cin >> b;
    fraction num2(a/b);
    cout << "Sum of the two fractions(num1 and num2) is " << num1 + num2;
    return 0;
}`
  },
  {
    id: "cpp_opoverload_3",
    question: "Define a class Matrix to represent matrices. Overload the * operator to multiply two 2x2 matrices.",
    answer: `// Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices.
#include <iostream>
using namespace std;

class matrix
{
public:
    int matrices[2][2];
    matrix(int a, int b, int c, int d)
    {
        matrices[0][0] = a;
        matrices[0][1] = b;
        matrices[1][0] = c;
        matrices[1][1] = d;
    }

    matrix() {}

    void fillmatrix()
    {
        int num;
        cout << "Enter the value for the matrix:  ";
        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                cout << "Enter the value[" << i << "][" << j << "]";
                cin >> num;
                matrices[i][j] = num;
            }
        }
    }
    // learn this formula for 2*2 matrices multiplication (C[i][j]​=A[i][0]​B[0][j]​+A[i][1]B[1]​[j])
    matrix operator*(matrix &m2)
    {
        matrix m3;
        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                m3.matrices[i][j] = (this->matrices[i][0] * m2.matrices[0][j]) + (this->matrices[i][1] * m2.matrices[1][j]);
            }
        }
        return m3;
    }
};

int main()
{
    matrix m1(1, 2, 3, 4), m2(5, 6, 7, 8), m3;

    m3 = m1 * m2;

    cout << "Matrix 1: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m1.matrices[i][j] << "  ";
        }
        cout << endl;
    }
    cout << "Matrix 2: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m2.matrices[i][j] << "  ";
        }
        cout << endl;
    }

    cout << "Matrix 3(Matrix 1 * Matrix 2) Using Operator Overloading: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m3.matrices[i][j] << "  ";
        }
        cout << endl;
    }
    return 0;
}`
  },
  {
    id: "cpp_opoverload_4",
    question: "Implement a class String to represent strings. Overload the + operator to concatenate two strings.",
    answer: `// Implement a class String to represent strings. Overload the + operator to concatenate two strings.
#include <iostream>
#include <cstring>
using namespace std;

class String
{
    char s1[50];

public:
    String(const char *str)
    {
        strcpy(s1, str);
    }
    char *operator+(String &n)
    {
        strcat(this->s1, n.s1);
        return s1;
    }
};

int main()
{
    String st1("This is String 1 "), st2("This is String 2 ");
    cout << (st1 + st2);
}`
  },
  {
    id: "cpp_opoverload_5",
    question: "Define a class Date to represent dates. Overload the < operator to compare two dates.",
    answer: `// Define a class Date to represent dates. Overload the < operator to compare two dates.
#include <iostream>
using namespace std;

class Date
{
private:
    int date, month, year;

public:
    Date() {}
    void setdate(int a, int b, int c)
    {
        date = a;
        month = b;
        year = c;
    }
    void operator<(Date &dt)
    {
        if (this->year == dt.year)
        {
            if (this->month == dt.month)
            {
                if (this->date == dt.date)
                {
                    cout << "Both Dates are same";
                }
                else
                {
                    if (this->date > dt.date)
                    {
                        cout << "First Date is greater than Second Date";
                    }
                    else
                    {
                        cout << "Second date is greater than First Date";
                    }
                }
            }
            else
            {
                if (this->month > dt.month)
                {
                    cout << "First Date is greater than Second Date";
                }
                else
                {
                    cout << "Second date is greater than First Date";
                }
            }
        }
        else
        {
            if (this->year > dt.year)
            {
                cout << "First Date is greater than Second Date";
            }
            else
            {
                cout << "Second date is greater than First Date";
            }
        }
    }
};

int main()
{
    Date dt1, dt2;
    int date, month, year;
    cout << "Enter First Date: " << endl;
    cout << "Date(Enter a valid date only): ";
    cin >> date;
    cout << "Month(1=jan,2=feb and so on): ";
    cin >> month;
    cout << "Year(Enter a valid year only): ";
    cin >> year;
    dt1.setdate(date, month, year);
    cout << endl;
    cout << "Enter Second Date: " << endl;
    cout << "Date(Enter a valid date only): ";
    cin >> date;
    cout << "Month(1=jan,2=feb and so on): ";
    cin >> month;
    cout << "Year(Enter a valid year only): ";
    cin >> year;
    dt2.setdate(date, month, year);

    dt1 < dt2;
}`
  },
  {
    id: "cpp_opoverload_6",
    question: "Implement a class Money to represent money. Overload the + operator to add two amounts of money.",
    answer: `// Implement a class Money to represent money. Overload the + operator to add two amounts of money.
#include <iostream>
using namespace std;

class money
{
private:
    int amt;

public:
    money(int n)
    {
        amt = n;
    }

    int operator+(money &mn)
    {
        return (this->amt + mn.amt);
    }
};

int main()
{
    int amt;
    cout << "Enter the First amount of money: ";
    cin >> amt;
    money m1(amt);
    cout << "Enter the Second amount of money: ";
    cin >> amt;
    money m2(amt);

    cout << "Sum of both amounts of money: " << (m1 + m2);

    return 0;
}`
  },
  {
    id: "cpp_opoverload_7",
    question: "Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.",
    answer: `// Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.
#include <iostream>
using namespace std;

class rectangle
{
private:
    int length, breadth;

public:
    rectangle(int a, int b)
    {
        length = a;
        breadth = b;
    }

    void operator==(rectangle &r)
    {
        if ((this->length == r.length) && (this->breadth == r.breadth))
        {
            cout << "Both Rectangles are Congruent(exactly equal)" << endl;
        }
        else if ((this->length * this->breadth) == (r.length * r.breadth))
        {
            cout << "Both Rectangles area are equal but not congruent" << endl;
        }
        else
        {
            cout << "Both Rectangles are not equal";
        }
    }
};

int main()
{
    int len, bred;
    cout << "Enter the detail for 1st rectangle: " << endl;
    cout << "Length: ";
    cin >> len;
    cout << "Breadth: ";
    cin >> bred;
    rectangle r1(len, bred);
    cout << "Enter the detail for 2nd rectangle: " << endl;
    cout << "Length: ";
    cin >> len;
    cout << "Breadth: ";
    cin >> bred;
    rectangle r2(len, bred);

    r1 == r2;

    return 0;
}`
  },
  {
    id: "cpp_opoverload_8",
    question: "Define a class Time to represent time. Overload the << operator to display the time in HH:MM format.",
    answer: `// Define a class Time to represent time. Overload the << operator to display the time in HH:MM format.
#include <iostream>
using namespace std;

class time
{
public:
    int hr, min;
    time(int h, int m)
    {
        hr = h;
        min = m;
    }
    void operator<<(ostream)
    {
        cout << hr << "::" << min;
    }
};

ostream &operator<<(ostream &out, time &t)
{
    out << t.hr << ":" << t.min;
    return out;
}

int main()
{
    int hr, min;

    cout << "Enter the time details: " << endl;
    cout << "Hours: ";
    cin >> hr;
    cout << "Minutes: ";
    cin >> min;

    time t1(hr, min);

    cout << "Time:  " << t1;

    return 0;
}`
  }
],

  "VIRTUAL FUNCTIONS": [{
    id: "cpp_virtual_1",
    question: "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
    answer: `// Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.
#include <iostream>
#include <string.h>
using namespace std;

class animal
{
protected:
    virtual void sound() = 0;
};
class tiger : public animal
{
public:
    void sound()
    {
        cout << "Tiger roars." << endl;
    }
};
class lion : public animal
{
public:
    void sound()
    {
        cout << "Lion roars loudly." << endl;
    }
};

int main()
{
    tiger t1;
    lion l1;

    t1.sound();
    cout << endl;
    l1.sound();

    return 0;
}`
  },
  {
    id: "cpp_virtual_2",
    question: "Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle that implement the respective methods to calculate the area and perimeter of each shape.",
    answer: `// Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.
#include <iostream>
#include <math.h>
using namespace std;

class shape
{
protected:
    virtual double calculateArea() = 0;
    virtual double calculatePerimeter() = 0;
};

class circle : public shape
{
private:
    double rad;

public:
    circle(double radius)
    {
        rad = radius;
    }

    double calculateArea()
    {
        return (M_PI * rad * rad);
    }
    double calculatePerimeter()
    {
        return (M_PI * 2 * rad);
    }
};
class triangle : public shape
{
private:
    double s1, s2, s3;

public:
    triangle(double side1, double side2, double side3)
    {
        s1 = side1;
        s2 = side2;
        s3 = side3;
    }

    double calculateArea()
    {
        double sum = ((s1 + s2 + s3) / 2);
        return (sqrt(sum * (sum - s1) * (sum - s2) * (sum - s3)));
    }
    double calculatePerimeter()
    {
        return (s1 + s2 + s3);
    }
};

int main()
{
    circle c1(10);
    triangle t1(10, 10, 10);

    cout << "Area of triangle: " << t1.calculateArea() << endl;
    cout << "Perimeter of triangle: " << t1.calculatePerimeter();
    cout << endl;
    cout << "Area of Circle: " << c1.calculateArea() << endl;
    cout << "Perimeter of circle: " << c1.calculatePerimeter();

    return 0;
}`
  },
  {
    id: "cpp_virtual_3",
    question: "Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes SavingsAccount and CurrentAccount that implement the respective methods to handle deposits and withdrawals for each account type.",
    answer: `// Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.
#include <iostream>
using namespace std;

class bankAccount
{
protected:
    int balance;
    virtual void deposit() = 0;
    virtual void withdraw() = 0;
};

class savingsAccount : public bankAccount
{
public:
    savingsAccount()
    {
        balance = 1000;
    }
    void deposit()
    {
        int amt;
        cout << "Enter the amount you would like to deposit: ";
        cin >> amt;
        bankAccount::balance += amt;
        cout << "Amount Deposited!" << endl;
        cout << "New Balance: " << bankAccount::balance << endl;
    }
    void withdraw()
    {
        int amt;
        cout << "Enter the amount you would like to withdraw: ";
        cin >> amt;
        if (amt <= (bankAccount::balance - 500))
        {
            bankAccount::balance -= amt;
            cout << "Collect your Cash" << endl;
            cout << "New Balance: " << bankAccount::balance << endl;
        }
        else
        {
            cout << "Insufficient Balance" << endl;
            cout << "Minimum balance in account should be 500" << endl;
        }
    }
};

class currentAccount : public bankAccount
{
    int overdraft;

public:
    currentAccount()
    {
        balance = 2000;
    }
    void deposit()
    {
        int amt;
        cout << "Enter the amount you would like to deposit: ";
        cin >> amt;
        bankAccount::balance += amt;
        cout << "Amount Deposited!" << endl;
        cout << "New Balance: " << bankAccount::balance << endl;
    }
    void withdraw()
    {
        int amt;
        cout << "Enter the amount you would like to withdraw: ";
        cin >> amt;
        bankAccount::balance -= amt;
        cout << "Collect your Cash" << endl;
        if (bankAccount::balance >= 0)
        {
            cout << "New Balance: " << bankAccount::balance << endl;
        }
        else
        {
            overdraft = bankAccount::balance;
            cout << "Overdraft generated" << endl;
            cout << "Overdraft Amount: " << overdraft << " (Overdrafft Charges may apply, please deposit the overdraft amount to avoid charges)" << endl;
        }
    }
};

int main()
{
    savingsAccount sa;
    cout << "Savings Account Operations:" << endl;
    sa.deposit();
    sa.withdraw();

    return 0;
}`
  },
  {
    id: "cpp_virtual_4",
    question: "Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer that implement the eat() and sleep() methods differently based on their specific behavior.",
    answer: `// Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.
#include <iostream>
using namespace std;

class animal
{
protected:
    virtual void eat() = 0;
    virtual void sleep() = 0;
};

class tiger : public animal
{
public:
    void eat()
    {
        cout << "Tigers are obligatory carnovore with prey including (hoofed animals) weighing over 20 kg like deer species (Sambar, Chital), wild boar, gaur, and water buffalo" << endl;
    }
    void sleep()
    {
        cout << "Sleep time for tiger is 16-20 hours a day" << endl;
    }
};
class lion : public animal
{
public:
    void eat()
    {
        cout << "Lions are obligatory carnovore with prey including smaller animals (hares, birds) or carrion if necessary." << endl;
    }
    void sleep()
    {
        cout << "Sleep time for lion is 15-20 hours a day" << endl;
    }
};
class deer : public animal
{
public:
    void eat()
    {
        cout << "Deers are specialized herbivore with diet including leaves, twigs, buds, herbs, fruits, fungi, and lichen." << endl;
    }
    void sleep()
    {
        cout << "Sleep time for Deer is 4-5 hours a day" << endl;
    }
};

int main()
{
    tiger t1;
    lion l1;
    deer d1;

    cout << "Tiger:" << endl;
    t1.eat();
    t1.sleep();
    cout << endl;

    cout << "Lion:" << endl;
    l1.eat();
    l1.sleep();
    cout << endl;

    cout << "Deer:" << endl;
    d1.eat();
    d1.sleep();

    return 0;
}`
  },
  {
    id: "cpp_virtual_5",
    question: "Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer that implement the respective methods to calculate salary and display information for each role.",
    answer: `// Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.
#include <iostream>
using namespace std;

class Employee
{
protected:
    int basicSalary, fixedCTC, allowance, HRA;
    virtual float calculateSalary() = 0;
    virtual void displayInfo() = 0;
};

class Programmer : public Employee
{

public:
    void displayInfo()
    {
        cout << "A full-stack developer with 3–5 years of experience, responsible for writing code, debugging, and maintaining software modules." << endl;
    }

    float calculateSalary()
    {
        Employee::basicSalary = 800000;
        Employee::fixedCTC = 320000;
        Employee::allowance = 30000;
        Employee::HRA = 1420000;

        return (Employee::basicSalary + Employee::fixedCTC + Employee::allowance + Employee::HRA);
    }
};
class Manager : public Employee
{

public:
    void displayInfo()
    {
        cout << "A senior leader with 8+ years of experience, responsible for team management, project planning, and strategic decisions." << endl;
    }

    float calculateSalary()
    {
        Employee::basicSalary = 1800000;
        Employee::fixedCTC = 720000;
        Employee::allowance = 600000;
        Employee::HRA = 3120000;

        return (Employee::basicSalary + Employee::fixedCTC + Employee::allowance + Employee::HRA);
    }
};

int main()
{
    Programmer p1;
    Manager m1;

    cout << "Programmer Details:" << endl;
    p1.displayInfo();
    cout << "Total Salary: " << p1.calculateSalary() << endl;
    cout << endl;

    cout << "Manager Details:" << endl;
    m1.displayInfo();
    cout << "Total Salary: " << m1.calculateSalary() << endl;

    return 0;
}`
  },
  {
    id: "cpp_virtual_6",
    question: "Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube that implement the respective methods to calculate the volume and surface area of each shape.",
    answer: `// Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape

#include <iostream>
#include <math.h>
using namespace std;

class shape3d
{
protected:
    virtual double calculateVolume() = 0;
    virtual double calculateSurfaceArea() = 0;
};

class sphere : public shape3d
{
private:
    double rad;

public:
    sphere(double radius)
    {
        rad = radius;
    }

    double calculateVolume()
    {
        return ((4.0 / 3) * M_PI * rad * rad * rad);
    }
    double calculateSurfaceArea()
    {
        return (4.0 * M_PI * rad * rad);
    }
};
class cube : public shape3d
{
private:
    double side;

public:
    cube(double s)
    {
        side = s;
    }

    double calculateSurfaceArea()
    {
        return (6.0 * side * side);
    }
    double calculateVolume()
    {
        return (side * side * side);
    }
};

int main()
{
    sphere s1(10);
    cube c1(10);

    cout << "Surface Area of Sphere(radius 10units): " << s1.calculateSurfaceArea() << endl;
    cout << "Volume of Sphere(radius 10units): " << s1.calculateVolume() << endl;
    cout << "Surface Area of cube(side 10units): " << c1.calculateSurfaceArea() << endl;
    cout << "Volume of cube(side 10units): " << c1.calculateVolume() << endl;

    return 0;
}`
  },
  {
    id: "cpp_virtual_7",
    question: "Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle that implement the respective methods to start and stop the engines for each vehicle type.",
    answer: `// Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.
#include <iostream>
#include <string.h>
using namespace std;

class vehicle
{
protected:
    virtual void startEngine() = 0;
    virtual void stopEngine() = 0;
};
class car : public vehicle
{
public:
    void startEngine()
    {
        cout << "Car Engine Started" << endl;
    }
    void stopEngine()
    {
        cout << "Car Engine Stopped" << endl;
    }
};
class motorcycle : public vehicle
{
public:
    void startEngine()
    {
        cout << "MotorCycle Engine Started" << endl;
    }
    void stopEngine()
    {
        cout << "Motorcycle Engine Stopped" << endl;
    }
};

int main()
{
    car c1;
    motorcycle m1;

    c1.startEngine();
    c1.stopEngine();
    m1.startEngine();
    m1.stopEngine();

    return 0;
}`
  },
  {
    id: "cpp_virtual_8",
    question: "Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson that implement the respective methods to describe how each person eats and exercises.",
    answer: `// Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.
#include <iostream>
#include <string.h>
using namespace std;

class person
{
protected:
    virtual void eat() = 0;
    virtual void exercise() = 0;
};
class athlete : public person
{
public:
    void eat()
    {
        cout << "Athlete takes a calorie deficiet diet enriched with protien and vitamins" << endl;
    }
    void exercise()
    {
        cout << "Athlete daily worksout to mantain the correct physicqe and stamina" << endl;
    }
};
class lazyperson : public person
{
public:
    void eat()
    {
        cout << "lazy person eats a lot in the day with most of it containing carbs and fats" << endl;
    }
    void exercise()
    {
        cout << "lazy person almost do no excericse in his routine and gains weight in long time" << endl;
    }
};

int main()
{
    athlete a1;
    lazyperson l1;

    a1.eat();
    l1.eat();
    a1.exercise();
    l1.exercise();

    return 0;
}`
  },
  {
    id: "cpp_virtual_9",
    question: "Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes Glockenspiel and Violin that implement the respective methods to play and tune each instrument.",
    answer: `// Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.
#include <iostream>
#include <string.h>
using namespace std;

class instrument
{
protected:
    virtual void play() = 0;
    virtual void tune() = 0;
};
class Glockenspiel : public instrument
{
public:
    void play()
    {
        cout << "Glockenspiel is playing bright bell-like notes." << endl;
    }
    void tune()
    {
        cout << "Glockenspiel bars are tuned." << endl;
    }
};
class Violin : public instrument
{
public:
    void play()
    {
        cout << "Violin is playing smooth string music." << endl;
    }
    void tune()
    {
        cout << "Violin strings are being tuned." << endl;
    }
};

int main()
{
    Glockenspiel g1;
    Violin v1;

    g1.play();
    v1.play();
    g1.tune();
    v1.tune();

    return 0;
}`
  },
  {
    id: "cpp_virtual_10",
    question: "Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle that implement the respective methods to draw and resize each shape.",
    answer: `// Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.
#include <iostream>
using namespace std;

class shape2d
{
protected:
    virtual void draw() = 0;
    virtual void resize() = 0;
};

class rectangle : public shape2d
{
    float length = 10.0, breadth = 10.0;

public:
    void draw()
    {
        cout << "Rectangle is drawn(default size: length 10 units, breadth 10 units)" << endl;
    }
    void resize()
    {
        length = 20.0;
        breadth = 20.0;
        cout << "Ractangle is resized(New size lenght " << length << "Units" << "breadth" << breadth << "Units)" << endl;
    }
};
class circle : public shape2d
{
    float rad = 10.0;

public:
    void draw()
    {
        cout << "Circle is drawn(default size: radius 10 units)" << endl;
    }
    void resize()
    {
        rad = 20.0;
        cout << "Circle is resized(New size Radius " << rad << "Units)" << endl;
    }
};

int main()
{
    circle c1;
    rectangle r1;

    c1.draw();
    r1.draw();
    cout << endl;
    c1.resize();
    r1.resize();

    return 0;
}`
  },
  {
    id: "cpp_virtual_11",
    question: "Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square that implement the respective methods to calculate the area and perimeter of each shape.",
    answer: `// Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape
#include <iostream>
#include <math.h>
using namespace std;

class geometricshape
{
protected:
    virtual double area() = 0;
    virtual double perimeter() = 0;
};

class square : public geometricshape
{
private:
    double side;

public:
    square(double s)
    {
        side = s;
    }

    double area()
    {
        return (side * side);
    }
    double perimeter()
    {
        return (4.0 * side);
    }
};
class triangle : public geometricshape
{
private:
    double s1, s2, s3;

public:
    triangle(double side1, double side2, double side3)
    {
        s1 = side1;
        s2 = side2;
        s3 = side3;
    }

    double area()
    {
        double sum = ((s1 + s2 + s3) / 2);
        return (sqrt(sum * (sum - s1) * (sum - s2) * (sum - s3)));
    }
    double perimeter()
    {
        return (s1 + s2 + s3);
    }
};

int main()
{
    square s1(10);
    triangle t1(10, 10, 10);

    cout << "Area of triangle: " << t1.area() << endl;
    cout << "Perimeter of triangle: " << t1.perimeter();
    cout << endl;
    cout << "Area of Square: " << s1.area() << endl;
    cout << "Perimeter of Square: " << s1.perimeter();

    return 0;
}`
  },
  {
    id: "cpp_virtual_12",
    question: "Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk that implement the respective methods to describe how each bird flies and makes a sound.",
    answer: `// Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.
#include <iostream>
#include <string.h>
using namespace std;

class bird
{
protected:
    virtual void makesound() = 0;
    virtual void fly() = 0;
};
class eagle : public bird
{
public:
    void makesound()
    {
        cout << "Eagle is soaring in the sky." << endl;
    }
    void fly()
    {
        cout << "Eagle makes a sharp cry." << endl;
    }
};
class hawk : public bird
{
public:
    void makesound()
    {
        cout << "Hawk is flying high." << endl;
    }
    void fly()
    {
        cout << "Hawk screeches." << endl;
    }
};

int main()
{
    eagle e1;
    hawk h1;

    e1.fly();
    h1.fly();
    cout << endl;
    e1.makesound();
    h1.makesound();

    return 0;
}`
  }],
  "FILE HANDLING": [

{
id:"cpp_fh_1",
question:"Write a C++ program to create a new text file and write some text into it.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream file("new.txt");
    if (file)
    {
        file << "This is the Data that will be visible in our Text file";
        cout << "new.txt file is created and data has been written";
    }
    else
    {
        cout << "Error Creating or Opening file";
    }
    file.close();
    return 0;
}`
},

{
id:"cpp_fh_2",
question:"Write a C++ program to open an existing text file and display its contents.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        char ch;
        ch = file.get();
        while (ch)
        {
            cout << ch;
            ch = file.get();
        }
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`
},

{
id:"cpp_fh_3",
question:"Write a C++ program to count number of lines in a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        int line_count = 1;
        while (!file.eof())
        {
            if (file.get() == 10)
            {
                line_count += 1;
            }
        }
        cout << "NUmber of lines in the file is " << line_count;
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`
},

{
id:"cpp_fh_4",
question:"Write a C++ program to count number of words in a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        int word_count = 0;
        char word[35];
        while (!file.eof())
        {
            file >> word;
            word_count++;
            cout << word << endl;
        }
        cout << word_count;
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`
},

{
id:"cpp_fh_5",
question:"Write a C++ program to copy contents of one file to another.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream reading("read.txt", ios::in);
    if (reading)
    {
        fstream writing("write.txt", ios::out);
        if (writing)
        {
            char ch;
            while (reading.get(ch))
            {
                writing << (char)ch;
            }
            cout << "Data has been copied to another file";
            writing.close();
        }
        reading.close();
    }
}`
},

{
id:"cpp_fh_6",
question:"Write a C++ program to find and replace a word in a file.",
answer:`#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;

int main()
{
    char read[20], found[20], replace[20];
    fstream sample("sample", ios::in);
    if (sample)
    {
        fstream copy("copy", ios::out);
        if (copy)
        {
            cout << "Enter the word you like to replace: ";
            cin >> found;
            cout << "word to replace with: ";
            cin >> replace;
            while (sample >> read)
            {
                if (strcmp(read, found) == 0)
                {
                    strcpy(read, replace);
                }
                copy << read << " ";
            }
            copy.close();
        }
        sample.close();
    }

    fstream copy("copy", ios::in);
    if (copy)
    {
        fstream sample("sample", ios::out);
        if (sample)
        {
            while (copy >> read)
            {
                sample << read << " ";
            }
            sample.close();
        }
        copy.close();
    }
    return 0;
}`
},

{
id:"cpp_fh_7",
question:"Write a C++ program to append data to a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream outFile("existing.txt", ios::app);

    if (outFile)
    {
        outFile << "\\nThis is a new line of data being appended.\\n";
        outFile << "Appending another line is just as easy.\\n";

        outFile.close();

        cout << "Data successfully appended to existing file" << endl;
    }
    else
    {
        cout << "There is some error in opening or finding file";
    }
    return 0;
}`
},

{
id:"cpp_fh_8",
question:"Write a C++ program to sort lines of a file alphabetically.",
answer:`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    string lines[100];
    string line;
    int count = 0;

    ifstream reading("data.txt");
    if (reading)
    {
        while (getline(reading, line) && count < 100)
        {
            lines[count] = line;
            count++;
        }
        reading.close();
    }

    for (int i = 0; i < count; i++)
    {
        for (int j = i + 1; j < count; j++)
        {
            if (lines[i][0] > lines[j][0])
            {
                line = lines[j];
                lines[j] = lines[i];
                lines[i] = line;
            }
        }
    }

    ofstream writing("data.txt");
    if (writing)
    {
        for (int i = 0; i < count; i++)
        {
            writing << lines[i] << endl;
        }
        writing.close();
        cout << "All the lines in the file has been sorted alphabatically";
    }
}`
},

{
id:"cpp_fh_9",
question:"Write a C++ program to merge multiple files.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    int count;
    string name;
    cout << "Enter the number of Input files(small files): ";
    cin >> count;

    fstream write("merge.txt", ios::app);
    if (write)
    {
        for (int i = 0; i < count; i++)
        {
            cout << "Enter the " << i + 1 << " File Name: ";
            cin >> name;
            ifstream read(name);
            if (read)
            {
                char ch;
                while (read.get(ch))
                {
                    write << (char)ch;
                }
                write << endl;
                cout << "Data written from file " << name << endl;
            }
        }
        cout << "\\nMerge File ready";
        write.close();
    }
}`
},
{
id:"cpp_fh_10",
question:"Write a C++ program to split a large text file into smaller files of equal size.",
answer:`#include <iostream>
#include <fstream>
#include <math.h>
using namespace std;

int main()
{
    int lpf;
    int linecount = 0;
    string line;
    fstream read("merge.txt", ios::in);
    if (read)
    {
        while (getline(read, line))
        {
            linecount++;
        }
        read.close();
    }

    cout << "Total Number of line in Main File is " << linecount << endl;
    cout << "Enter the lines per file: ";
    cin >> lpf;
    int filenumber = int(round((float)linecount / lpf));

    fstream large("merge.txt",ios::in);
    if (large)
    {
        for (int i = 1; i <= filenumber; i++)
        {
            string name = "file" + to_string(i) + ".txt";
            fstream small(name, ios::out);
            if (small)
            {
                for (int j = 0; j < lpf; j++)
                {
                    if (getline(large, line))
                    {
                        small << line << endl;
                    }
                }
                cout << "file " << name << " is created!" << endl;
                small.close();
            }
        }
        large.close();
    }
}`
},

{
id:"cpp_fh_11",
question:"Write a C++ program to search for a specific string in a text file and display its line number.",
answer:`#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;
int main()
{
   string line, find;
   int lineCount = 0, found = 0;
   ifstream fread("first.txt");
   if (fread)
   {
      cout << "Enter the word you would like to find: ";
      cin >> find;
      while (getline(fread, line))
      {
         lineCount++;

         if (line.find(find) != string::npos)
         {
            found = 1;
            break;
         }
      }
      if (found)
      {
         cout << "The word has been found" << endl;
         cout << "Line Number: " << lineCount;
      }
      else
      {
         cout << "Word not found!";
      }
   }
   return 0;
}`
},

{
id:"cpp_fh_12",
question:"Write a C++ program to encrypt the contents of a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    char ch;
    fstream file("encrypt.txt", ios::out);
    if (file)
    {
        cout << "Enter the content you want to write in the file(Press ~ + enter to stop): ";
        ch = getchar();
        while (ch != 126)
        {
            file.put(ch+12);
            ch = getchar();
        }
        file.close();
        cout << "Your Data has been stored in the file in an ecrypted format";
    }
}`
},

{
id:"cpp_fh_13",
question:"Write a C++ program to decrypt the contents of a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    char ch;
    fstream file("encrypt.txt", ios::in);
    if (file)
    {
        ch = file.get();
        while (ch != -1)
        {
            cout << char(ch-12);
            ch = file.get();
        }
        file.close();
        cout << endl;
        cout << "Your stored Encrypted Data has been decrypted here";
    }
}`
},

{
id:"cpp_fh_14",
question:"Write a C++ program to read a CSV file and display it.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream csv("new.csv", ios::in);

    if (csv)
    {
        char ch;
        while (csv.get(ch))
        {
            if (ch == ',')
            {
                ch = 9;
                cout << '|';
                cout << (char)ch;
            }
            else
            {
                cout << (char)ch;
            }
        }
    }

    return 0;
}`
},

{
id:"cpp_fh_15",
question:"Write a C++ program to calculate average of numbers stored in a file.",
answer:`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream reading("number.txt", ios::in);
    if (reading)
    {
        float num;
        int numcount = 0;
        float avg = 0;
        while (reading >> num)
        {
            avg += num;
            numcount++;
        }
        avg = (avg / numcount);
        cout << endl
             << "Average of all the numbers in the file is :  " << avg;
        reading.close();
    }
}`
},

{
id:"cpp_fh_16",
question:"Write a C++ program for student record system using binary file.",
answer:`//16. Write a C++ program to store the information of 10 Students having rollno,name,marks,mobileno properties, get() and set() member functions as binary file with following options 1. Insert Record 2. Delete Record 3. Update Record (based on rollno) 4. Search Record (based on rollno) 5. Clone the file 6. Exit.
#include <iostream>
#include <string.h>
#include <fstream>
#include <iomanip>
#include <string>
using namespace std;

class student
{
private:
    int roll;
    int marks;
    char mobile[15]; 
    char name[50];   
public:
    static int rollcount;

    student()
    {
        roll = 0;
        marks = 0;
        name[0] = '\0';
        mobile[0] = '\0';
    }

    student(string nm, string mb, int mr)
    {
        rollcount += 1;
        roll = rollcount;
        strcpy(name, nm.c_str());
        strcpy(mobile, mb.c_str());
        marks = mr;
    }
    string getname()
    {
        return string(name);
    }
    string getmobile()
    {
        return string(mobile);
    }
    int getroll()
    {
        return roll;
    }
    int getmarks()
    {
        return marks;
    }
    void setname(string nm)
    {
        strcpy(name, nm.c_str());
    }
    void setmobile(string mb)
    {
        strcpy(mobile, mb.c_str());
    }
    void setmarks(int mr)
    {
        marks = mr;
    }
    ~student() {}
};

int student::rollcount = 1000;

int studentCount = 0;
void getrollcount();
void setrollcount();
void addStudent();
void showStudent();
void editStudent();
void deletestudent();
void overwritefile();
void searchstudent();
void cloneRecord();

int main()
{
    int opt;
    do
    {
        getrollcount();
        cout << "Choose one option from the menu" << endl;
        cout << "1) Show all student Record" << endl;
        cout << "2) Add a Student Record" << endl;
        cout << "3) Edit a Student Record" << endl;
        cout << "4) Delete a Student Record" << endl;
        cout << "5) Search a Student Record" << endl;
        cout << "6) Create a clone Record Text File" << endl;
        cout << "0) Exit Program" << endl;
        cout << "Your Choice ==> ";
        cin >> opt;
        if (opt < 0 || opt > 6)
        {
            cout << "Invalid option" << endl;
            cout << "Please select again: " << endl;
        }
        else
        {
            switch (opt)
            {
            case 1:
                showStudent();
                break;
            case 2:
                addStudent();
                break;
            case 3:
                editStudent();
                break;
            case 4:
                deletestudent();
                break;
            case 5:
                searchstudent();
                break;
            case 6:
                cloneRecord();
                break;
            }
        }

    } while (opt != 0);

    return 0;
}

void getrollcount()
{
    fstream record("record", ios::binary | ios::in);
    if (record)
    {
        record.read((char *)&student::rollcount, sizeof(student::rollcount));
        record.close();
    }
}

void setrollcount()
{
    fstream record("record", ios::binary | ios::out);
    if (record)
    {
        record.write((char *)&student::rollcount, sizeof(student::rollcount));
        record.close();
    }
}

void addStudent()
{
    student *ptr;
    string name;
    string mobile;
    int marks;

    cout << "Enter Student Detail: " << endl;
    cin.ignore();
    cout << "Name: ";
    getline(cin, name);
    cout << "Mobile Number: ";
    getline(cin, mobile);
    if (mobile.length() > 10)
        mobile = mobile.substr(0, 10);
    cout << "Marks: ";
    cin >> marks;
    ptr = new student(name, mobile, marks);

    fstream file("studentData", ios::binary | ios::app);

    if (file)
    {
        file.write((char *)ptr, sizeof(student));
        cout << "Student added!" << endl;
        file.close();
    }

    delete ptr;
    setrollcount();
}

void showStudent()
{
    student *ptr;
    ptr = new student(); 
    fstream file("studentData", ios::binary | ios::in);
    if (file)
    {
        cout << "+----------+----------------------+--------+--------------+" << endl;
        cout << "|"
             << left << setw(10) << "Roll No" << "|"
             << setw(22) << "Name" << "|"
             << setw(8) << "Marks" << "|"
             << setw(14) << "Mobile No" << "|"
             << endl;
        cout << "+----------+----------------------+--------+--------------+" << endl;
        while (file.read((char *)ptr, sizeof(student)))
        {
            cout << "|"
                 << left << setw(10) << ptr->getroll() << "|"
                 << setw(22) << ptr->getname() << "|"
                 << setw(8) << ptr->getmarks() << "|"
                 << setw(14) << ptr->getmobile() << "|"
                 << endl;
            cout << "+----------+----------------------+--------+--------------+" << endl;
        }
        file.close();
    }
    delete ptr;
}

void editStudent()
{
    int roll;
    string name;
    string mobile;
    student *ptr;
    cout << "Enter the roll Number of the student: ";
    cin >> roll;
    fstream studentData("studentData", ios::binary | ios::in);
    if (studentData)
    {
        fstream copy("copy", ios::binary | ios::out);
        if (copy)
        {
            ptr = new student(); 
            while (studentData.read((char *)ptr, sizeof(student)))
            {
                if ((ptr->getroll()) == roll)
                {
                    cout << "Student found!" << endl;
                    getchar();
                    cout << "Enter new name for the student:";
                    getline(cin, name);
                    ptr->setname(name);
                    cout << "Enter new Mobile Number for the student:";
                    getline(cin, mobile);
                    if (mobile.length() > 10)
                        mobile = mobile.substr(0, 10); 
                    ptr->setmobile(mobile);
                }
                copy.write((char *)ptr, sizeof(student));
            }
            copy.close();
        }
        studentData.close();
    }
    // now overwriting the file
    overwritefile();
}

void deletestudent()
{
    int roll;
    student *ptr;
    cout << "Enter the roll Number of the student: ";
    cin >> roll;
    fstream studentData("studentData", ios::binary | ios::in);
    if (studentData)
    {
        fstream copy("copy", ios::binary | ios::out);
        if (copy)
        {
            ptr = new student(); 
            while (studentData.read((char *)ptr, sizeof(student)))
            {
                if ((ptr->getroll()) == roll)
                {
                    cout << "Student Record Deleted" << endl;
                }
                else
                {
                    copy.write((char *)ptr, sizeof(student));
                }
            }
            copy.close();
        }
        studentData.close();
    }
    // now overwriting the file
    overwritefile();
}

void overwritefile()
{
    student *ptr;
    fstream studentdata("studentData", ios::binary | ios::out);
    if (studentdata)
    {
        fstream copy("copy", ios::binary | ios::in);
        if (copy)
        {
            ptr = new student(); 
            while (copy.read((char *)ptr, sizeof(student)))
            {
                studentdata.write((char *)ptr, sizeof(student));
            }
            copy.close();
        }
        studentdata.close();
    }
}

void searchstudent()
{
    int roll;
    int isFound = 0;
    student *ptr;
    cout << "Enter the roll Number of the student: ";
    cin >> roll;
    fstream studentData("studentData", ios::binary | ios::in);
    if (studentData)
    {
        ptr = new student(); 
        while (studentData.read((char *)ptr, sizeof(student)))
        {
            if ((ptr->getroll()) == roll)
            {
                isFound = 1;
                cout << "Roll Number: " << ptr->getroll() << endl;
                cout << "Name: " << ptr->getname() << endl;
                cout << "Mobile Number: " << ptr->getmobile() << endl;
                cout << "Marks: " << ptr->getmarks() << endl;
            }
        }
        if (isFound == 0)
        {
            cout << "\nStudent with the entered Roll number not found!";
        }
        studentData.close();
    }
}

void cloneRecord()
{
    student *ptr;
    ptr = new student(); 
    fstream file("studentData", ios::binary | ios::in);
    if (file)
    {
        fstream clone("CloneRecord.txt", ios::out);
        if (clone)
        {
            clone << "+----------+----------------------+--------+--------------+" << endl;
            clone << "|"
                  << left << setw(10) << "Roll No" << "|"
                  << setw(22) << "Name" << "|"
                  << setw(8) << "Marks" << "|"
                  << setw(14) << "Mobile No" << "|"
                  << endl;
            clone << "+----------+----------------------+--------+--------------+" << endl;
            while (file.read((char *)ptr, sizeof(student)))
            {
                clone << "|"
                      << left << setw(10) << ptr->getroll() << "|"
                      << setw(22) << ptr->getname() << "|"
                      << setw(8) << ptr->getmarks() << "|"
                      << setw(14) << ptr->getmobile() << "|"
                      << endl;
                clone << "+----------+----------------------+--------+--------------+" << endl;
            }
            clone.close();
        }
        file.close();
    }
    delete ptr;
}`
}

]

};