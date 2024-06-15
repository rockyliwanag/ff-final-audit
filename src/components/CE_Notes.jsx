import React from 'react'

const CE_Notes = () => {
  return (
    <>
        <div>
        <h1>CE Notes</h1>
            <form>
                <div>
                    <label>Sales Met</label> 
                    <div>
                        <input type='radio' name='salesMet' value='yes'/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type='radio' name='salesMet' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label>Holding</label> 
                    <div>
                        <input type='radio' name='holding' value='yes'/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type='radio' name='holding' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label>Number of Planes</label> 
                    <div>
                        <input type='number' name='numPlanes'/>
                    </div>
                </div>

            </form>
        </div>
    </>
  )
}

export default CE_Notes