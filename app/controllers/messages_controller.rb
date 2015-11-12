class MessagesController < ApplicationController
	def index
		respond_with Message.all
	end

	def create
		respond_with Message.create(message_params)
	end

	private
	def message_params
		params.require(:message).permit(:name, :text)
	end
end
end
