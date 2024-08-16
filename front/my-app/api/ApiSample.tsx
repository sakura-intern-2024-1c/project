export const Fetchs = {
	getQuestions:async()=>{
		return questionsSample
	},
	getQuestion:async(id:number)=>{
		var question=null
		for (let q of questionsSample){
			if (q.id == id){
				question=q
			}
		}
		return question
	},
	getAnswer:async(question_id:number)=>{
		var answer=null
		for (let a of AnswerSample){
			if(a.question_id == question_id){
				answer=a
			}
		}
		return answer
	},
	getUsers:async()=>{
		return usersSample
	}
}

export type Question = {
	id: number;
	q: string;
	user_id: number;
}

export const questionsSample:Question[]=[
	{id:1, q:"幸せとは何か、それをどのように定義できますか？", user_id:1},
	{id:2, q:"地球温暖化を防ぐために、個人ができる具体的なアクションは何ですか？", user_id:2},
	{id:3, q:"第二次世界大戦が現代社会に与えた最も大きな影響は何だと思いますか？", user_id:4},
	{id:4, q:"AIの発展が未来の仕事にどのような影響を与えると思いますか？", user_id:2},
	{id:5, q:"世界の異なる文化の中で、最も興味深いと感じる習慣は何ですか？", user_id:9},
	{id:6, q:"ベーシックインカムは、社会にどのような影響を与える可能性がありますか？", user_id:9},
]

export type Answer ={
	id: number;
	a: string;
	question_id: number;
	user_id: number;
}

export const answerSample:Answer[]=[
	{id:1, a:"幸せ（幸福）とは、個人が人生において満足感や充実感を感じる状態を指します。これは非常に主観的な概念であり、人によって幸せの定義やその要素は異なります。", question_id:1, user_id:3},
	{id:2, a:"地球温暖化を防ぐために個人ができる具体的なアクションはいくつかあります。まず、エネルギーの節約が重要です。たとえば、省エネ家電を使用したり、LED照明を使ったりすることで、家庭での電力消費を減らすことができます。また、使用していない電化製品の電源を切る、部屋を出る際に照明を消すなど、小さな習慣も効果的です。", question_id:2, user_id:4},
	{id:3, a:"第二次世界大戦が現代社会に与えた最も大きな影響は、国際秩序の再構築と冷戦構造の形成です。", question_id:3, user_id:7},
	{id:4, a:"AIの進化によって多くの業務が自動化されるでしょう。特に、ルーチンで繰り返しの多い作業やデータ処理、分析などの業務がAIによって効率化されると考えられます。これにより、企業はコストを削減し、業務の迅速化を図ることができますが、同時に従来の仕事が減少する可能性があります。例えば、製造業や事務職などでの仕事がAIに取って代わられることが予想されます。", question_id:4, user_id:7},
	{id:5, a:"世界の異なる文化の中で、特に興味深い習慣の一つは、日本の「おもてなし」の文化です。おもてなしは、訪問者やゲストに対して心からの歓迎と気配りを示す日本独特のホスピタリティの概念です。単なるサービスの提供を超えて、相手の期待を上回る配慮や細やかな心遣いを大切にします。", question_id:5, user_id:8},
	{id:6, a:"貧困の削減が期待されます。ベーシックインカムにより、最低限の生活費が保証されるため、貧困層の生活の質が向上し、生活の安定が図れる可能性があります。これにより、社会的な格差の縮小や、貧困によるストレスや健康問題の軽減が期待されます。", question_id:6, user_id:10},
]


export type User = {
	id: number;
	name: string;
	status: string;
	experience: string;
};
export const usersSample: User[] = [
	{ id: 1, name: "田中 太郎", status: "休憩中", experience: "営業1年目" },
	{ id: 2, name: "鈴木 一郎", status: "仕事中", experience: "エンジニア2年目" },
	{ id: 3, name: "高橋 由美", status: "休憩中", experience: "総務5年目" },
	{ id: 4, name: "山田 健一", status: "仕事中", experience: "営業4年目" },
	{ id: 5, name: "伊藤 明美", status: "休憩中", experience: "営業1年目" },
	{ id: 6, name: "中村 翔太", status: "仕事中", experience: "営業4年目" },
	{ id: 7, name: "渡辺 直子", status: "休憩中", experience: "エンジニア8年目" },
	{ id: 8, name: "小林 真一", status: "休憩中", experience: "エンジニア3年目" },
	{ id: 9, name: "加藤 美咲", status: "外出中", experience: "エンジニア1年目" },
	{ id: 10, name: "吉田 和彦", status:"休憩中", experience: "エンジニア2年目" },
]
