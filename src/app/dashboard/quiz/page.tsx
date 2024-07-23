import { Quiz } from '@/components/quiz'

function QuizPage() {
  return (
    <div className="min-h-screen w-full px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Quiz Page</h1>
      <div className="mt-8 h-full">
        <Quiz levels={10} />
      </div>
    </div>
  )
}

export default QuizPage
