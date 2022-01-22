# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostController inherits the methods of ApplicationController. The purpose of the BlogPostController is to do logic and methods for the REST routes.
class BlogPostsController < ApplicationController
  def index
    # ---2) The .all is grabbing all stored information in BlogPost Table in postgresql and store the information in the instance variable @posts. The information is stored as an array of hash objects that can be accessible with the variable, typical purpose is to access the information for a index route html file.
    @posts = BlogPost.all
  end

  def show
    # ---3)The .find(search an object with an id) and returns a hash object which then is stored in a instance vairable @post. The purpose is to later use the information stored in the object for the show route html file.
    @post = BlogPost.find(params[:id])
  end

  # ---4)The method new is for the route new, the purpose is to create an empty hash object that can be use an argument for a new form.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) BlogPost.create() is the code needed for a POST of a new object, and conducting a strict params to only allow certain properties to be accessible in a Table - BlogPost.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)The method edit is for the edit route, the purpose is to edit a hash object based on id. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Method that updates an object based on the blog_post_params argument, a strict params. The strict params only allows certain access values within the Table.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Sends the user to the as: blog_post route if destroy was unsuccessful.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private makes anything below this line only locally avaiable for the class itself and cannot be access anywhere else. The purpose is to give another layer of security to the database by not been accessible in the routes.
  private
  def blog_post_params
    # ---10) The params requires an argument :blog_post, which has an object, and returns back only the values pertaining to :title and :content. The purpose is to only allows the user access to a set of information in the table.
    params.require(:blog_post).permit(:title, :content)
  end
end
