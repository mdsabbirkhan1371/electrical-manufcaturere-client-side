import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container py-5'>
            <div>
                <h3>Question(1): How will you improve the performance of a React Application?</h3>
                <p>Answer: I will improve the performance of a React Applications : </p>
                <p>1. Using Immutable Data Structures</p>
                <p>2. Function/Stateless Components and React.PureComponent</p>
                <p>3. Multiple Chunk Files </p>
                <p>4.Using Production Mode Flag in Webpack</p>
                <p>5.Dependency optimization</p>
            </div>

            <div>
                <h3>Question(2):  What are the different ways to manage a state in a React application?</h3>
                <p>Answer: The Four Kinds of React State to Manage</p>
                <p>1.Local state.</p>
                <p>2.Global State.</p>
                <p>3.Server state.</p>
                <p>4.URL state.</p>
            </div>
            <div>
                <h3>Question(3):  How does prototypical inheritance work?</h3>
                <p>Answer: Prototypical Inheritance work as,, </p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object</p>

            </div>
            <div>
                <h3>Question(4):  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>Why we do not set the state directly in React?
                    React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM</p>
            </div>
            <div>
                <h3>Question(6): You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>I can implement to find the product by name ,,i will through map function in th array and then i can search the product by name.</p>
            </div>

            <div>
                <h3>Question(6): What is a unit test? Why should write unit tests?</h3>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.Developers write unit tests for their code to make sure that the code works correctly.</p>
            </div>
        </div>
    );
};

export default Blogs;