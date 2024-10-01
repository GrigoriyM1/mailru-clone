export interface IQuestion {
  id: string;
  additionals: string[]
  createdAt: string;
  isLeader: boolean;
  likes: number
  themeText: string
  text: string
  category: string
  subcategory: string 
  userId: string

  answers: IAnswer[]
}

interface IAnswer {
  id: string 
  createdAt: string
  updatedAt: string
  isBestAnswer: boolean
  likes: number
  questionId: string 
  text: string 
  userId: string
}