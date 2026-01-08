// import React from "react";

// const EditableNote = ({ setEditid, saveEditNote, editNote, setEditnote }) => {
//   const handleCancel = () => {
//     setEditid(null);
//   };
//   const handleEditSave = () => {
//     saveEditNote();
//   };
//   return (
//     <div className="col-4 my-3">
//       <div className="d-flex flex-column justify-content-between p-3 rounded-5 editable note">
//         <textarea
//           rows={7}
//           value={editNote.text}
//           onChange={(e) => setEditnote({ ...editNote, text: e.target.value })}
//           className="bg-transparent border-0 text-white"
//         ></textarea>
//         <div className="d-flex justify-content-between ">
//           <p className="text-white">{editNote.date}</p>
//           <div className="d-flex">
//             <button
//               className="btn btn-sm btn-light rounded-5 mx-1"
//               onClick={handleCancel}
//             >
//               cancel
//             </button>
//             <button
//               className="btn btn-sm btn-light rounded-3 "
//               onClick={handleEditSave}
//             >
//               save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EditableNote;
