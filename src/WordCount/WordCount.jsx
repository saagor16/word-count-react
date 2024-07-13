import { useState } from "react";

const WordCount = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  };

  const getCharacterCount = (text) => {
    return text.length;
  };

  const getSentenceCount = (text) => {
    // Split sentences by periods, exclamation marks, and question marks
    const sentences = text.trim() === '' ? [] : text.split(/[.!?]+/);
    // Filter out empty strings from split result
    const filteredSentences = sentences.filter(sentence => sentence.trim() !== '');
    return filteredSentences.length;
  };

  const getCharactersWithoutSpaces = (text) => {
    return text.replace(/\s/g, '').length;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Word and Character Counter</h1>
        <textarea
          className="border rounded-lg p-4 w-full h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
        />
        <div className="mt-6 text-center grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-indigo-500 text-white rounded-lg px-4 py-2 shadow-md transform transition duration-300 hover:scale-105">
            <p className="text-xl">Word Count: <span className="font-semibold">{getWordCount(text)}</span></p>
          </div>
          <div className="bg-green-500 text-white rounded-lg px-4 py-2 shadow-md transform transition duration-300 hover:scale-105">
            <p className="text-xl">Character Count: <span className="font-semibold">{getCharacterCount(text)}</span></p>
          </div>
          <div className="bg-yellow-500 text-white rounded-lg px-4 py-2 shadow-md transform transition duration-300 hover:scale-105">
            <p className="text-xl">Sentence Count: <span className="font-semibold">{getSentenceCount(text)}</span></p>
          </div>
          <div className="bg-purple-500 text-white rounded-lg px-4 py-2 shadow-md transform transition duration-300 hover:scale-105">
            <p className="text-xl">Characters without Spaces: <span className="font-semibold">{getCharactersWithoutSpaces(text)}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCount;
