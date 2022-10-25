import React,{ useState } from 'react';
import Headers from './Headers';
var binary = require('text-to-binary-converter');

function TextToBinaryConverter() {

    const [textarea, settextarea] = useState('');
    const [textareafirst, settextareafirst] = useState('');
    const [textarearesult, settextarearesult] = useState('');
    const [textareadisplay, settextareadisplay] = useState('none');
    const [textarealoader, settextarealoader] = useState(false);
    const [files, setfiles] = useState('');

    const handleTextArea = (event) => {
        event.preventDefault();
        settextarea(event.target.value);
    }

    const ConverterToBinary = () => {
        settextarealoader(true);
        setTimeout(() => {
            // console.log(binary.convert(textarea))
            settextarearesult(binary.convert(textarea))
            settextareafirst(textarea)
            settextareadisplay('block')
            settextarealoader(false);
        }, 2000);
        window.onload = (event) => {
            console.log('page is fully loaded');
        };
    }

    const Reset = () => {
        settextareadisplay('none');
        settextarealoader(true);
        setTimeout(() => { 
            settextarealoader(false);
            settextarearesult('');
            settextarea('')
            settextareafirst('');
        }, 2000);

    }

    function handleUploadFile(event) {
        event.preventDefault()
        setfiles(event.target.files[0]);
    }
    
    function handleUploadFileSubmit(event) {
        event.preventDefault()
        fetch(files.name).then(function(response){
            return response.text();
        }).then(function (data) {
            settextarealoader(true);
            setTimeout(() => {
                // console.log(binary.convert(data))
                settextarearesult(binary.convert(data))
                settextareafirst(data)
                settextareadisplay('block')
                settextarealoader(false);
            }, 2000);
        })
    }  

    if(textarealoader === true) {
        return(
            <>
                <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </>
        )
    }

    return (
      <React.Fragment>
        <Headers />
        <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">Text To Binary Converter</p>
                        <p className="mt-2 max-w-4xl text-sm text-gray-500 lg:mx-auto">Convert any ASCII Text into Binary numbers. Text to Binary tool is one of the free tools provided by SST for Text conversion. Just enter any English text, of a single character, word, or a long string to convert into a binary code.</p>
                    </div>
                    <div className="mt-10">
                        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                <textarea id="comment" cols="50" rows="10" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Paste Your Text Here" onChange={handleTextArea} defaultValue={textareafirst} required=""></textarea>
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                <input type='file' onChange={handleUploadFile} />
                            </div>
                        </div>
                        <center>
                            <button type={'submit'} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-indigo-800" onClick={handleUploadFileSubmit}>Converter To Binary File Upload</button>
                            <button type="submit" className="ml-8 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-indigo-800" onClick={ConverterToBinary}>Converter To Binary</button>
                            <button type="submit" className="ml-8 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-indigo-800" onClick={Reset}>Reset</button>
                        </center>
                    </div>
                    <div className="mt-10" style={{display:textareadisplay}}>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl text-center">Result</p>
                        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                <textarea id="TextAreaResult" name="TextAreaResult" cols="50" rows="10" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" defaultValue={textarearesult} required=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </React.Fragment>
    )
}

export default TextToBinaryConverter;