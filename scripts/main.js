/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#5C4033; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");
        

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
            break;
        case "Selection":Selection_sort();
            break;
        case "Insertion":Insertion();
            break;
        case "Merge":Merge();
            break;
        case "Quick":Quick();
            break;
        case "Heap":Heap();
            break;
    }
}

function bubbleFunction()
{
    const complexity = document.querySelector(".complex");
    complexity.classList.add("active");

    document.getElementById("sorting-name").innerHTML = "Bubble Sort"
    document.getElementById("about-sort").innerHTML = "<br/>It is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order."

    document.getElementById("best").innerHTML = "O(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "O(n^2)"

}

function selectionFunction()
{
    document.getElementById("sorting-name").innerHTML = "Selection Sort"
    document.getElementById("about-sort").innerHTML = "<br/>This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list."

    document.getElementById("best").innerHTML = "O(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "O(n^2)"
}

function insertionFunction()
{
    document.getElementById("sorting-name").innerHTML = "Insertion Sort"
    document.getElementById("about-sort").innerHTML = "<br/>This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. <br/>For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, Insertion sort."

    document.getElementById("best").innerHTML = "O(n)"
    document.getElementById("worst").innerHTML = "O(n^2)"
    document.getElementById("avg").innerHTML = "O(n^2)"
}

function mergeFunction()
{
    document.getElementById("sorting-name").innerHTML = "Merge Sort"
    document.getElementById("about-sort").innerHTML = "<br/>It is a sorting technique based on divide and conquer technique. Merge sort first divides the array into equal halves and then combines them in a sorted manner."

    document.getElementById("best").innerHTML = "O(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "O(n*log(n))"
}

function quickFunction()
{
    document.getElementById("sorting-name").innerHTML = "Quick Sort"
    document.getElementById("about-sort").innerHTML = "<br/>It is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. <br/>A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. <br/>Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. "

    document.getElementById("best").innerHTML = "O(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "O(n^2)"
}

function heapFunction()
{
    document.getElementById("sorting-name").innerHTML = "Heap Sort"
    document.getElementById("about-sort").innerHTML = "<br/>Heap sort processes the elements by creating the min-heap or max-heap using the elements of the given array. Min-heap or max-heap represents the ordering of array in which the root element represents the minimum or maximum element of the array."

    document.getElementById("best").innerHTML = "O(n*log(n))"
    document.getElementById("worst").innerHTML = "O(n*log(n))"
    document.getElementById("avg").innerHTML = "O(n*log(n))"
}