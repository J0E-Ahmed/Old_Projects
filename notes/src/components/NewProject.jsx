import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDueDate = dueDate.current.value;

    if (
      enterDescription.trim() === "" ||
      enterTitle.trim() === "" ||
      enterDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Pleas make sure you provide a valid value for every input filed.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16  ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              close
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="py-2 px-8 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
