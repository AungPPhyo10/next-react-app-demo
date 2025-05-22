import { PREMISE, QUESTIONS } from '../data';

export default function Page() {
    return (
        <>
            {PREMISE}
            <form action="/quiz/result">
                {QUESTIONS.map(({ id: questionId, question, answers }) => (
                    <fieldset key={questionId} className="mt-5">
                        <legend>{questionId}{') '}{question}</legend>
                        {answers.map(({ id: answerId, answer, type }) => (
                            <div key={answerId}>
                                <input type="radio" name={questionId} id={answerId} value={type} required />
                                <label htmlFor={answerId}>{answer}</label>
                            </div>
                        ))}
                    </fieldset>
                ))}
                <div className="flex justify-center mt-4">
                    <button type="submit" className="bg-slate-400 border-1 p-2">Submit</button>
                </div>  
            </form>
        </>
    );
}
