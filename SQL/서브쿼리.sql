
# 서브 쿼리 : 하나의 쿼리문 안에 또 다른 쿼리문이 들어간 sql 문법


# 김사랑 사원과 같은 부서에 속한 사원들의 사번, 사원명, 부서번호를 조회
# 1. 김사랑 사원이 속한 부서를 확인
SELECT DEPTNO
FROM emp
WHERE ENAME = '김사랑';
# 2. 20번 부서에 속한 사원들의 사번, 사원명, 부서번호를 조회
SELECT EMPNO, ENAME, DEPTNO
FROM emp
WHERE 
DEPTNO = 20;

SELECT EMPNO, ENAME, DEPTNO
FROM emp
WHERE 
DEPTNO = (
	SELECT DEPTNO 
	FROM emp 
	WHERE ENAME = '김사랑');


# 사번이 1001번인 사원과 같은 직급을 갖는 사원들의 모든 정보를 조회 
SELECT *
FROM EMP
WHERE
JOB = (
	SELECT JOB
	FROM EMP
	WHERE EMPNO = 1001);
	
SELECT * FROM emp;
SELECT * FROM dept;
	
# 사번이 1005번인 사원의 사번, 사원명, 부서번호, 부서명, 부서가 위치한 지역을 조회(JOIN 사용 금지)
SELECT EMPNO, ENAME, DEPTNO, 
		(SELECT DNAME 
		FROM dept 
		WHERE DEPTNO = emp.DEPTNO) AS DNAME,
		(SELECT LOC
		FROM DEPT
		WHERE DEPTNO = emp.DEPTNO) AS LOC
FROM emp

# 모든 사원의 평균 급여보다 급여가 더 많은 사원의 사번, 사원명, 급여를 조회

SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL > (SELECT AVG(SAL) FROM emp);

SELECT * FROM board;
SELECT * FROM board_reply;

#댓글 번호가 1번인 댓글의 댓글내용, 댓글 작성자, 해당 댓글이 달린 게시글의 제목, 내용을 조회
#위 문제를 조인, 서브쿼리 각각 풀어보세요.

SELECT REPLY_CONTENT, REPLY_WRITER, 
       B.TITLE, B.CONTENT
FROM board_reply R INNER JOIN board B 
ON R.BOARD_NUM = B.BOARD_NUM
WHERE REPLY_NUM = 1;


SELECT REPLY_CONTENT, REPLY_WRITER, BOARD_NUM,
       (SELECT TITLE 
		 FROM BOARD 
		 WHERE BOARD_NUM = BOARD_REPLY.BOARD_NUM) AS TITLE,
       (SELECT CONTENT 
		 FROM BOARD 
		 WHERE BOARD_NUM = BOARD_REPLY.BOARD_NUM) AS CONTENT
FROM board_reply
WHERE REPLY_NUM = 1;

# 모든 게시글의 글번호, 제목, 작성자, 해당 게시글에 달린 댓글 수를 조회

SELECT BOARD_NUM, TITLE, WRITER,
		(SELECT COUNT(REPLY_NUM)
		FROM BOARD_REPLY
		WHERE BOARD_NUM = board.BOARD_NUM) AS 댓글수
FROM board;


		
		













