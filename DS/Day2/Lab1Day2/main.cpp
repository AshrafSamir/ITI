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
        cout << "Found" <<endl;
    else
        cout << "Not Found" <<endl;



    Stack<int> s;

    s.add(1);
    s.add(4);
    s.add(5);

    s.display();
    cout<<"We made a pop "<< s.pop()<<endl;
    s.display();
    s.add(5);
    s.add(10);
    s.display();
    cout<<"We made a pop "<< s.pop()<<endl;
    cout<<"We made a pop "<< s.pop()<<endl;
    s.display();


    Queue<int> q;
    int data;

    q.enQueue(1);
    q.enQueue(4);
    q.enQueue(5);

    q.display();
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    q.display();
    q.enQueue(5);
    q.enQueue(10);
    q.display();
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    cout<<"did we made a deQueue "<< q.deQueue(data) <<" ->"<<data<<endl;
    q.display();


    CircularQueue<int> cq(3);
    cq.enQueue(1);
    cq.enQueue(4);
    cq.enQueue(5);
    cq.Display();
    cout<<endl;
    cout<<"did we made a deQueue "<< cq.deQueue() <<endl;
    cq.Display();
    cout<<endl;
    cout<<"did we made a deQueue "<< cq.deQueue() <<endl;
    cq.Display();
    cq.enQueue(1);
    cq.enQueue(2);
    cout<<endl;
    cq.Display();


    return 0;
}
