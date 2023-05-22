import React, { useState, useEffect } from "react";
import "./Updates.css";
import { Octokit } from "@octokit/core";
import { motion } from 'framer-motion';
import { BiPaperPlane } from 'react-icons/bi'

const Updates = () => {
  const [commits, setCommits] = useState([]);
  const [prevRepoCommits, setPrevRepoCommits] = useState([]);
  const octokit = new Octokit({
    auth: `${process.env.REACT_APP_CODROP_GITHUB_TOKEN}`,
  });

  useEffect(() => {
    const owner = "shyam640",
      repo = "codrop",
      prevRepo = "coDrop---A-Platform-for-Daily-Coders";
    async function getCommits() {
      const prevCommits = await octokit.request(
        'GET /repos/{owner}/{prevRepo}/commits',
        { owner, prevRepo }
      );
      // console.log(prevCommits);
      
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        { owner, repo }
        );
        // console.log(response);
        
      setPrevRepoCommits(prevCommits);
      setCommits(response);
    }
    getCommits();
  }, []);

  return (
    <div className="flex justify-center items-center m-2 sm:p-4">
      <div className="border-solid border-l-4 border-blue-600">
        <h3 class="text-2xl text-gray-700 font-bold -mt-4 mb-6 -ml-3">
          Updates Timeline
        </h3>

          {commits.data?.map((d) => (
            <li key={d} className='flex flex-col flex-start'>
              <div class="w-full h-auto">
                <div class="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="text-white w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div class="px-1 py-2 w-full rounded-lg shadow-xl bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400 hover:bg-gradient-to-br hover:from-pink-300 hover:via-purple-400 hover:to-blue-500 mb-10">
                  <div class="flex flex-col justify-between mb-2">
                    <a
                      href={d.html_url}
                      target="_blank"
                      class="font-bold text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out text-sm"
                    >
                      {d.sha}
                    </a>
                    <a
                      href={d.html_url}
                      target="_blank"
                      class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                    >
                      Commit Date : {new Date(d.commit.committer.date).toLocaleString()}
                    </a>
                  </div>
                  <p className="mt-1 flex overflow-hidden">Description : {d.commit.message}</p>
                  {/* <h6 className="mt-2">Committer Details</h6>
                  <div class="flex flex-col justify-between mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        onClick={d.committer.html_url}
                        src={d.committer.avatar_url}
                        alt={d.commit.committer.name}
                      />
                      <div className="flex flex-col">
                        <a
                          href={d.committer.html_url}
                          target="_blank"
                          class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                        >
                          Name : {d.commit.committer.name}
                        </a>
                        <a
                          href={d.committer.html_url}
                          class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                        >
                          Email : {d.commit.committer.email}
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="flex flex-row">

                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href=d.commit.tree.url;
                        }}
                      class="flex flex-row mx-2 bg-gradient-to-br from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-2 py-1 font-semibold items-center justify-center gap-1 rounded-lg hover:text-black transition-200 ease-in-out"
                      data-mdb-ripple="true"
                    >
                      Visit Repo <BiPaperPlane/>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="button"
                      class="flex flex-row mx-2 bg-gradient-to-br from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-2 py-1 font-semibold items-center justify-center gap-1 rounded-lg hover:text-black transition-200 ease-in-out"
                      data-mdb-ripple="true"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href=d.commit.tree.url;
                        }}
                    >
                      See Changes <BiPaperPlane/>
                    </motion.button>
                  </div> */}
                </div>
              </div>
            </li>
          ))}


          {prevRepoCommits.data?.map((d) => (
            <li key={d} className='flex flex-col flex-start'>
              <div class="w-full h-auto">
                <div class="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="text-white w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div class="px-1 py-2 w-full rounded-lg shadow-xl bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400 hover:bg-gradient-to-br hover:from-pink-300 hover:via-purple-400 hover:to-blue-500 mb-10">
                  <div class="flex flex-col justify-between mb-2">
                    <a
                      href={d.html_url}
                      target="_blank"
                      class="font-bold text-red-600 hover:text-red-700 focus:text-red-800 duration-300 transition ease-in-out text-sm"
                    >
                      {d.sha}
                    </a>
                    <a
                      href={d.html_url}
                      target="_blank"
                      class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                    >
                      Commit Date : {d.commit.committer.date}
                    </a>
                  </div>
                  <p className="mt-1 flex overflow-hidden">Description : {d.commit.message}</p>
                  {/* <h6 className="mt-2">Committer Details</h6>
                  <div class="flex flex-col justify-between mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        onClick={d.committer.html_url}
                        src={d.committer.avatar_url}
                        alt={d.commit.committer.name}
                      />
                      <div className="flex flex-col">
                        <a
                          href={d.committer.html_url}
                          target="_blank"
                          class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                        >
                          Name : {d.commit.committer.name}
                        </a>
                        <a
                          href={d.committer.html_url}
                          class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                        >
                          Email : {d.commit.committer.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <motion.button
                      type="button"
                      class="flex flex-row mx-2 bg-gradient-to-br from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-2 py-1 font-semibold items-center justify-center gap-1 rounded-lg hover:text-black transition-200 ease-in-out"
                      data-mdb-ripple="true"
                    >
                      Visit Repo <BiPaperPlane/>
                    </motion.button>
                    <motion.button
                      type="button"
                      class="flex flex-row mx-2 bg-gradient-to-br from-cyan-500 to-blue-500 w-fit hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 px-2 py-1 font-semibold items-center justify-center gap-1 rounded-lg hover:text-black transition-200 ease-in-out"
                      data-mdb-ripple="true"
                      onClick={d.commit.tree.url}
                    >
                      See Changes <BiPaperPlane/>
                    </motion.button>
                  </div> */}
                </div>
              </div>
            </li>
          ))}

          
      </div>
      <div></div>
    </div>
  );
};

export default Updates;
