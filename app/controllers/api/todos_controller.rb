class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    render json: Todo.all
  end

  def updated
    @todo = Todo.find(params[:id])
    if @todo && @todo.update_attributes(todo_params)
      render json: @todo
    else
      render :index
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render :index
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
