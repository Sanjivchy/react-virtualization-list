import { User } from "../../@types/users";
import { useState } from "react";

interface Props {
  data: User;
}

const List = ({ data: { name, bio, language, version } }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-2xl shadow w-full text-sm p-2">
      <div className="space-y-2">
        <div className="w-2/3">
          <p>
            <span className="font-bold">Title:</span> {name}
          </p>
          <p>
            <span className="font-bold">Language:</span> {language}
          </p>
        </div>

        {isOpen && (
          <div>
            <p>
              <span className="font-bold">Version:</span> {version}
            </p>
            <p>
              <span className="font-bold">Bio:</span> {bio}
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
