/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { TbArticle } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Cards from "./Cards.jsx";
import Lists from "./Lists.jsx";
import Feedback from "./Feedback.jsx";
import Loading from "./Loading.jsx";

const UserPost = () => {
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const totalPages = Math.ceil(post.length / itemPerPage);
  const pagesArray = Array.from({ length: totalPages }, (ele, ind) => ind + 1);

  console.log("current page", currentPage);
  useEffect(() => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const filter = post.slice(start, end);
    setFilteredData(filter);
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const handleDelete = (id) => {
    let postData = post;
    postData = postData.filter((items) => items.id != id);
    setPost(postData);
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[30%] bg-[#e9f0f6] flex flex-col items-center pb-5 rounded-r-lg">
        <div className="bg-white mx-6 my-3 rounded-lg w-[300px] h-auto">
          <div className="flex gap-5  p-3 items-center">
            <img
              src="https://media.istockphoto.com/id/811843774/photo/indian-mother-and-daughter.jpg?s=1024x1024&w=is&k=20&c=WL7cOTptI_myv9Uo11lxjtd1dKGuHXfdkOt3f5ort78="
              alt="user"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div>
              <h2 className="font-bold text-[20px]">Hi Reader,</h2>
              <p className="leading-none">Here&apos;s your News!</p>
            </div>
          </div>
        </div>
        {!feedback ? (
          <div className="bg-white mx-6 my-3 rounded-lg w-[300px] h-auto">
            <div className="py-3 px-1 ">
              <h2 className="text-center font-extrabold text-[20px] text-gray-600">
                View Toggle
              </h2>
              <div className="w-full flex justify-center">
                <div className="w-[200px] h-[100px] bg-gray-400 rounded-lg flex justify-center mt-4">
                  <div
                    className={`flex w-[100px] justify-center items-center text-[80px] ${
                      !toggle ? "bg-green-500 rounded-l-lg" : ""
                    }`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <TbArticle />
                  </div>
                  <div
                    className={`flex w-[100px] justify-center items-center text-[60px] ${
                      toggle ? "bg-green-500 rounded-r-lg" : ""
                    }`}
                    onClick={() => {
                      setToggle(true);
                    }}
                  >
                    <FaListUl />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="bg-white mx-6 my-3 rounded-lg w-[300px] h-auto">
          <div className="py-3 px-1">
            <h2 className="text-center font-extrabold text-[20px] text-gray-600">
              Have a Feedback ?
            </h2>
            <div
              className="w-full flex justify-center cursor-pointer"
              onClick={() => {
                setFeedback(!feedback);
              }}
            >
              <div className="w-[200px] h-auto bg-green-400 rounded-lg flex justify-center mt-4 p-4 text-[18px] font-bold">
                We`re Listening !
              </div>
            </div>
          </div>
        </div>
      </div>
      {feedback ? (
        <div className="w-[70%] bg-[#e5e8e9] flex flex-wrap justify-around  ">
          <Feedback feedback={setFeedback} />
        </div>
      ) : (
        <>
          <div className="w-[70%] bg-[#e5e8e9] flex flex-wrap justify-around  ">
            {loading ? (
              <Loading />
            ) : (
              <>
                {filteredData.map((posts) => {
                  return (
                    <div key={posts.id}>
                      {!toggle ? (
                        <Cards post={posts} handleDelete={handleDelete} />
                      ) : (
                        <Lists post={posts} handleDelete={handleDelete} />
                      )}
                    </div>
                  );
                })}
                <div className="flex gap-4 py-5 text-[24px] w-full justify-center items-center">
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-gray-600 text-white flex justify-center items-center"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                    disabled={currentPage === 1}
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />
                  </button>
                  {pagesArray
                    .filter(
                      (item, ind) =>
                        ind >= currentPage - 1 && ind <= currentPage + 2
                    )
                    .map((item, index) => {
                      return (
                        <button
                          className={`w-[30px] h-[30px] rounded-full ${
                            item === currentPage
                              ? "bg-green-600 text-white"
                              : "bg-gray-600 text-white"
                          }  flex justify-center items-center`}
                          onClick={() => {
                            setCurrentPage(item);
                          }}
                          key={index}
                        >
                          {item}
                        </button>
                      );
                    })}
                  <button
                    className="w-[30px] h-[30px] rounded-full bg-gray-600 text-white flex justify-center items-center"
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                    disabled={currentPage === totalPages}
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserPost;
