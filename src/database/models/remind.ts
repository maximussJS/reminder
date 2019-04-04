import { IRemind } from '../../utils/interfaces'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('reminds')
export class Remind implements IRemind {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: 'text',
        length: 500,
    })
    text: string

    @Column({
        name: 'chat_id',
    })
    chat_id: number

    @Column({
        name: 'time',
    })
    time: Date

    @CreateDateColumn()
    createdAt: Date

    setInfo(text: string, chat_id: number, time: Date) {
        this.text = text
        this.chat_id = chat_id
        this.time = time
    }

    getText(): string {
        return this.text
    }

    getTime(): Date {
        return this.time
    }
}
