FROM openjdk:16-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 9092
ENTRYPOINT ["java", "-jar", "/app.jar"]
