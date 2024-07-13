# Use the official Python image with tag 3.x-alpine
FROM python:3.9-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Install dependencies
RUN pip install --upgrade pip
RUN pip install fastapi

# Copy the rest of the application code to the container
COPY . /app/

# Expose the port that FastAPI runs on (default is 8000)
EXPOSE 8000

# Command to run the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
