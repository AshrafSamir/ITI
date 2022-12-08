#include <iostream>

#include "LinkedList.h"
#include "Stack.h"
#include "Queue.h"
#include "CircularQueue.h"

using namespace std;

int main()
{
    LinkedList<int> myList;
    LinkedList<int> *reversedList;

    myList.Add(22);
    myList.Add(5);
    myList.Add(3);
    myList.Add(22);
    myList.Add(11);

    myList.Display();
    myList.bubbleSort();
    myList.Display();
    cout<<"index "<<myList.binarySearch(22)<<endl;


    return 0;
}
