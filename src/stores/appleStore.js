/*
 * @Author: sylvanas
 * @Date: 2020-12-02 22:36:42
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-12-06 20:54:37
 * @Description:
 */
import { observable, action, computed } from 'mobx'

class appleStore {
	// observable 将状态值变为可观察状态
	// 定义变量
	@observable apples = [
		{
			id: 0,
			weight: 233,
			isEaten: true,
		},
		{
			id: 1,
			weight: 235,
			isEaten: true,
		},
		{
			id: 2,
			weight: 256,
			isEaten: false,
		},
	]
	@observable newAppleId = 3
	@observable isPicking = false
	@observable buttonText = '摘苹果'

	// 计算状态值
	// 已经吃掉的苹果
	@computed get status() {
		let status = {
			appleNow: {
				quantity: 0,
				weight: 0,
			},
			appleEaten: {
				quantity: 0,
				weight: 0,
			},
		}
		this.apples.forEach((apple) => {
			let selector = apple.isEaten ? 'appleEaten' : 'appleNow'
			status[selector].quantity++
			status[selector].weight += apple.weight
		})
		return status
	}

	// 摘苹果
	@action.bound pickApple() {
		// 设定标识，标注请求是否已结束
		if (this.isPicking) return

		this.isPicking = true
		this.buttonText = '摘苹果中，请稍后~'
		setTimeout(() => {
			let weight = Math.floor(200 + Math.random() * 50)
			this.isPicking = false
			this.buttonText = '摘苹果'
			this.apples.push({
				id: this.newAppleId++,
				weight: weight,
				isEaten: false,
			})
		}, 1500)
	}

	// 吃苹果
	@action.bound eatApple(appleId) {
		let targetIndex = ''
		this.apples.forEach((apple, index) => {
			if (apple.id === appleId) {
				targetIndex = index
			}
		})

		this.apples[targetIndex].isEaten = true
	}
}

const apple = new appleStore()

export default apple
