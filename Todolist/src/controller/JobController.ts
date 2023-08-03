import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { MyTodoList } from "../entity/TodoList"
import axios, { AxiosHeaders, AxiosResponse } from 'axios';




export class  JobController {

    private JobRepository = AppDataSource.getRepository(MyTodoList)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.JobRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        const job = await this.JobRepository.findOne({
            where: { id }
        })

        if (!job) {
            return "unregistered job"
        }
        return job
    }
    async save(request: Request, response: Response, next: NextFunction) {
        
        const { time, job,checked } = request.body;
        
        const addjob = Object.assign(new MyTodoList(), {
            time,
            job,
            checked
        })
        console.log(addjob)
         return this.JobRepository.save(addjob)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)
        let JobToRemove = await this.JobRepository.findOneBy({ id })
    
        if (!JobToRemove) {
            return "this job not exist"
        }
        await this.JobRepository.remove(JobToRemove)
        return "job has been removed"
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;
        const jobUpdate = await this.JobRepository.findOneBy({id:id})

        if (!jobUpdate) {
            return "this job not exist"
        }

        const { time, job,checked } = request.body;
        jobUpdate.time = time;
        jobUpdate.job = job;
        jobUpdate.checked = checked;
        console.log(request.body);
        await this.JobRepository.save(jobUpdate);
        return "job has been update"
    }
   
    async page(request: Request, response: Response, next: NextFunction){
        const page = parseInt(request.query.page as string)
        const limit = parseInt(request.query.limit as string)
        let totalItem = await this.JobRepository.find();
        let totalitem = totalItem.length;
        let lastpage = Math.ceil(totalitem/limit)

        try{
            const skip = (page - 1)*limit;
            const pageJob = await this.JobRepository.find({
                skip:skip,
                take:limit,
            });

            response.json({
                total: totalitem,
                lastPage:lastpage,
                perPage:limit,
                cunrrentPage:page,
                jobs:pageJob
            })
        }catch(error){
                console.log("loiiiiiiii");
        }

    }
        
  }
    

       
    

