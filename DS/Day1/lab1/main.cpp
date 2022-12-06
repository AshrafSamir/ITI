#include <iostream>

#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList<int> myList;
    LinkedList<int> *reversedList;

    myList.Add(3);
    myList.Add(5);
    myList.Add(7);
    myList.Add(9);
    myList.Add(11);

    myList.Display();
    cout<<"Linked List Size = "<<myList.GetCount()<<endl;
    myList.Remove(7);
    cout<<"Linked List Size = "<<myList.GetCount()<<endl;
    myList.Display();

    cout<<"Data = "<<myList.GetDataByIndex(5)<<endl;
    myList.InsertAfter(5, 5);
    myList.InsertAfter(10, 5);
    cout<<"Linked List Size = "<<myList.GetCount()<<endl;
    myList.Display();

    reversedList = myList.Reverse();
    reversedList->Display();
    myList.Display();
    myList.Display();
    myList.InsertAfter(12, 10);
    myList.Add(13);
    myList.Display();
    myList.Remove(3);
    myList.Display();
    myList.Remove(5);
    myList.Display();
    reversedList = myList.Reverse();

    reversedList->Remove(13);
    myList.Remove(9);
    myList.Add(211);
    reversedList->Display();
    myList.Display();
    myList.InPlaceReverse();
    myList.Display();
    myList.Add(3);
    myList.Display();
    myList.InsertAfter(12, 5);
    myList.Display();
    reversedList->Display();
    myList.Remove(12);
    myList.Display();


    if(myList.Search(9))
        cout << "Found";
    else
        cout << "Not Found";

    return 0;
}
