import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , setPassword] = useState('')
  const [copied , setCopied] = useState('')

  //  Using Ref Hook 
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } , [password])



  // Using Callback Hook 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_-+={}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  } , [length , numberAllowed , characterAllowed ,setPassword])


  // Using Effect Hook
  useEffect(() => {passwordGenerator()} , [length , numberAllowed , characterAllowed , passwordGenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-2xl mb-4'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-auto mb-4 bg-white'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-3 text-gray-700'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        {copied && <p className='text-green-500 text-center'>Copied to clipboard!</p>}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id='numberInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
