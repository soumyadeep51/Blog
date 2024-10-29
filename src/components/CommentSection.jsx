import React from 'react'

function CommentSection({setopenCS}) {
  return (
       <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments</h3>
            <div className="space-y-4">
            
                  <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32" alt="Commenter Profile Picture" />
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <h5 className="font-semibold text-gray-800"></h5>
                    <p className="text-gray-600">{}</p>
                  </div>
                </div>
              
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 p-2 border rounded-l-lg"
                placeholder="Add a comment..."
                
                
              />
              <button
                
              >
                Post
              </button>
            </div>
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
              onClick={()=>setopenCS(false)}
              >
              Close
            </button>
             
          </div>
        </>
      );
    };
    
    export default CommentSection;
    
  
